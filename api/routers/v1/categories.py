from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from api.schemas import types
from api.deps import get_db, get_current_user
from api.services import categories
from api.helpers import http

router = APIRouter()


@router.get('/get')
async def get_category(
    db: Session = Depends(get_db), current_user: types.User = Depends(get_current_user)
):
    all_categories = categories.get(current_user=current_user, db=db)

    return http.response(message='Get categoty in commerces', db=all_categories)


@router.post('/create')
async def create_category(
    name: str = Form(),
    image: UploadFile = File(),
    description: str = Form(),
    db: Session = Depends(get_db),
    current_user: types.User = Depends(get_current_user),
):
    
    all_categories = categories.create(name=name, image=image, description=description,current_user=current_user,db=db)

    return http.response(message='new category was created', db=all_categories)

@router.get("/delete/{id}")
async def delete_category(
    id: int,
    db: Session = Depends(get_db),
    current_user: types.User = Depends(get_current_user),
):
    category = categories.delete(id=id, current_user=current_user, db=db)

    return http.response(message='Delete categoty', db=category)
