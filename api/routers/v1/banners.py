from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.deps import get_db
from api.services import banners

router = APIRouter()


@router.get("/get")
async def get_banners(db: Session = Depends(get_db)):
    all_banners = banners.get(db=db)

    return all_banners
