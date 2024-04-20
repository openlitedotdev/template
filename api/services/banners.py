from sqlalchemy.orm import Session
from api.schemas import models


def get(db: Session):
    banners = db.query(models.Banner).all()

    return banners
