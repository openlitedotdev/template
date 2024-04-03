from sqlalchemy.orm import Session
from api.schemas import models
from api.deps import on_validate_admin, save_image_cloudinary

def get(db: Session):

    products = db.query(models.Product).all()

    return products

def create(name, price, image, if_offer, offer_price, punctuation, quantity, description, brand, category_id, db: Session, current_user: dict):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )

    on_validate_admin(user.role)

    image_url, image_public_id = save_image_cloudinary(image)

    created_product = models.Product(
        name=name,
        price=price,
        image=image_url,
        image_public_id=image_public_id,
        is_offer=if_offer,
        offer_price=offer_price,
        punctuation=punctuation,
        quantity=quantity,
        description=description,
        brand=brand,
        category_id=category_id,
    )

    db.add(created_product)
    db.commit()
    db.refresh(created_product)