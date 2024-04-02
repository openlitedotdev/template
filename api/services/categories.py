from sqlalchemy.orm import Session
from api.schemas import models
from api.deps import on_validate_admin
from api.deps import save_image_cloudinary
from cloudinary import uploader
# from api.helpers import http

def get(db = Session):

    categories = db.query(models.Category).all()
    
    return categories


def create(name,image,description,current_user, db = Session):
    user = (
        db.query(models.User).filter(models.User.email == current_user['sub']).first()
    )

    on_validate_admin(user.role)

    image_url,image_id = save_image_cloudinary(image)

    db_user = models.Category(
        name=name, 
        image=image_url, 
        description=description, 
        image_publi_id=image_id
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

def edit_id(id, current_user, db = Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )
    
    on_validate_admin(user.role)

    category = db.query(models.Category).filter(models.Category.id == id).first()

    return category
    
def edit(id, name, image, description, current_user, db = Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )
    on_validate_admin(user.role)

    category = db.query(models.Category).filter(models.Category.id == id).first()
    uploader.destroy(category.image_publi_id)
    image_url,image_id = save_image_cloudinary(image)

    db_category = models.Category(
        name=name, image=image_url, description=description, image_publi_id=image_id
    )

    category.name = db_category.name
    category.image = db_category.image
    category.description = db_category.description
    category.image_publi_id = db_category.image_publi_id

    db.commit()
    db.refresh(db_category)
    return category

def delete(id, current_user, db = Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )
    on_validate_admin(user.role)

    category = db.query(models.Category).filter(models.Category.id == id).first()

    uploader.destroy(category.image_publi_id)

    db.query(models.Category).filter(models.Category.id == id).delete()
    db.commit()