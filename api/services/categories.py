from sqlalchemy.orm import Session
from api.schemas import models
from api.deps import on_validate_admin

def get(current_user, db = Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )
    on_validate_admin(user.role)

    categories = db.query(models.Category).all()
    
    return categories


def create():
    pass
