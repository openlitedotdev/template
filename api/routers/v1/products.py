from fastapi import APIRouter, Depends, Form, File, UploadFile
from sqlalchemy.orm import Session
from api.deps import get_db, get_current_user
from api.services import products
from api.helpers import http
from api.schemas import types

router = APIRouter()


@router.get("/get")
async def get_products(db: Session = Depends(get_db)):
    all_products = products.get(db)

    return http.response(message="Get products in commerces", db=all_products)


@router.post("/create")
async def create_product(
    name: str = Form(),
    price: int = Form(),
    image: UploadFile = File(),
    if_offer: bool = Form(),
    offer_price: int = Form(),
    punctuation: int = Form(),
    quantity: int = Form(),
    description: str = Form(),
    brand: str = Form(),
    category_id: int = Form(),
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    product = products.create(
        name=name,
        price=price,
        image=image,
        if_offer=if_offer,
        offer_price=offer_price,
        punctuation=punctuation,
        quantity=quantity,
        description=description,
        brand=brand,
        category_id=category_id,
        db=db,
        current_user=current_user,
    )

    return http.response(message="New product was created", db=product)


@router.get("/get-by-id/{id}")
async def get_product_by_id(
    id: int,
    db: Session = Depends(get_db),
    current_user: types.User = Depends(get_current_user),
):
    product_by_id = products.get_by_id(id=id, current_user=current_user, db=db)

    return http.response(message="Product to be edited", db=product_by_id)


@router.patch("/edit/{id}")
async def edit_product(
    id: int,
    name: str = Form(),
    price: int = Form(),
    image: UploadFile = File(),
    if_offer: bool = Form(),
    offer_price: int = Form(),
    punctuation: int = Form(),
    quantity: int = Form(),
    description: str = Form(),
    brand: str = Form(),
    category_id: int = Form(),
    db: Session = Depends(get_db),
    current_user: types.User = Depends(get_current_user),
):
    product_edit = products.edit(
        id=id,
        name=name,
        price=price,
        image=image,
        if_offer=if_offer,
        offer_price=offer_price,
        punctuation=punctuation,
        quantity=quantity,
        description=description,
        brand=brand,
        category_id=category_id,
        db=db,
        current_user=current_user,
    )

    return http.response(message="Product was edited", db=product_edit)


@router.delete("/delete/{id}")
async def delete_product(
    id: int,
    db: Session = Depends(get_db),
    currrent_user: types.User = Depends(get_current_user),
):
    products_delete = products.delete(id=id, currrent_user=currrent_user, db=db)

    return http.response(message="Product was deleted", db=products_delete)
