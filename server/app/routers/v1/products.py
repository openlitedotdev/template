import cloudinary
import cloudinary.uploader
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from app.schemas import models, types
from app.deps import get_db, get_current_user, on_validate_admin

router = APIRouter()


@router.get("/get")
async def get_products(
    db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)
):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
        .first()
    )

    on_validate_admin(user.role)

    products = db.query(models.Product).all()

    return {
        "message": "Get products in commerces",
        "db": products,
        "status": status.HTTP_200_OK,
    }


@router.post("/create")
async def create_product(
    product: types.ProductCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    hash_product = product.model_dump()

    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
        .first()
    ) 

    on_validate_admin(user.role)

    cloudinary.uploader.upload(
        "https://cloudinary-devs.github.io/cld-docs-assets/assets/images/butterfly.jpeg",
        public_id="quickstart_butterfly",
        unique_filename=False,
        overwrite=True,
    )

    srcURL = cloudinary.CloudinaryImage("quickstart_butterfly").build_url()

    created_product = models.Product(
        name=hash_product.get("name"),
        price=hash_product.get("price"),
        image=srcURL,
        is_offer=hash_product.get("is_offer"),
        offer_price=hash_product.get("offer_price"),
        punctuation=hash_product.get("punctuation"),
        quantity=hash_product.get("quantity"),
        description=hash_product.get("description"),
        brand=hash_product.get("brand"),
        category_id=hash_product.get("category_id"),
    )

    db.add(created_product)
    db.commit()

    db.refresh(created_product)

    return {
        "message": "New product was created",
        "status": status.HTTP_200_OK,
    }
