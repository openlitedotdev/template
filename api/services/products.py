from sqlalchemy.orm import Session
from api.schemas import models
from api.deps import on_validate_admin, save_image_cloudinary
from cloudinary import uploader


def get(db: Session):
    products = db.query(models.Product).all()

    return products


def create(
    name,
    price,
    image,
    if_offer,
    offer_price,
    punctuation,
    quantity,
    description,
    brand,
    category_id,
    db: Session,
    current_user: dict,
):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
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


def get_by_id(id, current_user, db: Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
        .first()
    )

    on_validate_admin(user.role)

    product = db.query(models.Product).filter(models.Product.id == id).first()

    return product


def edit(
    id,
    name,
    price,
    image,
    if_offer,
    offer_price,
    punctuation,
    quantity,
    description,
    brand,
    category_id,
    current_user,
    db: Session,
):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
        .first()
    )

    on_validate_admin(user.role)

    product = db.query(models.Product).filter(models.Product.id == id).first()

    uploader.destroy(product.image_public_id)

    image_url, image_public_id = save_image_cloudinary(image)

    db_product = models.Product(
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

    product.name = db_product.name
    product.price = db_product.price
    product.image = db_product.image
    product.image_public_id = db_product.image_public_id
    product.is_offer = db_product.is_offer
    product.offer_price = db_product.offer_price
    product.punctuation = db_product.punctuation
    product.quantity = db_product.quantity
    product.description = db_product.description
    product.brand = db_product.brand
    product.category_id = db_product.category_id

    db.commit()
    db.refresh(product)
    return product


def delete(id, currrent_user, db: Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == currrent_user.get("sub"))
        .first()
    )

    on_validate_admin(user.role)

    product = db.query(models.Product).filter(models.Product.id == id).first()

    uploader.destroy(product.image_public_id)

    db.query(models.Product).filter(models.Product.id == id).delete()
    db.commit()
