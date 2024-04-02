from sqlalchemy.orm import Session
from api.schemas import models

def get(db: Session):

    products = db.query(models.Product).all()

    return products