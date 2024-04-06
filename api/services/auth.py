from api.schemas import models
from api.bcrypt import verify_password, get_password_hash
from fastapi import status, HTTPException
from api.deps import create_access_token
from sqlalchemy.orm import Session
from api.helpers import http
from api.deps import on_validate_admin


def access(user, db: Session):
    db_user = db.query(models.User).filter(models.User.email == user["email"]).first()

    if not db_user or not verify_password(user["password"], db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=http.response(message="Invalid credentials", status=401),
        )

    return create_access_token(data={"sub": user["email"]})


def create(user, db: Session):
    user["password"] = get_password_hash(user.pop("password")).decode()

    user_exists = (
        db.query(models.User).filter(models.User.email == user["email"]).first()
    )

    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(message="Email already registered", status=400),
        )

    db_user = models.User(
        name=user.get("name"),
        email=user.get("email").lower(),
        password=user.get("password"),
        phone=user.get("phone"),
        role=user.get("role"),
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)


def get_user(current_user, db: Session):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get("sub"))
        .first()
    )

    on_validate_admin(user.role)

    db.query(models.User).all()

    return db.query(models.User).all()
  
def get_user_by_id(id: int, db: Session):
    db_user = db.query(models.User).filter(models.User.id == id).first()

    return db_user

def get_user_by_email(user, db: Session):
    db_user = db.query(models.User).filter(models.User.email == user["email"]).first()
    
    return db_user
