from api.schemas import models
from api.bcrypt import verify_password, get_password_hash
from fastapi import status, HTTPException
from api.deps import create_access_token
from sqlalchemy.orm import Session


def access(user, db: Session):
    db_user = db.query(models.User).filter(models.User.email == user['email']).first()

    if not db_user and not verify_password(user['password'], db_user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='Credentials invalid'
        )

    return create_access_token(data={'sub': user['email']})


def create(user, db: Session):
    user['password'] = get_password_hash(user.pop('password')).decode()

    user_exists = (
        db.query(models.User).filter(models.User.email == user['email']).first()
    )

    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                'message': 'Email already registered',
                'db': [],
                'status': status.HTTP_400_BAD_REQUEST,
            },
        )

    db_user = models.User(
        name=user.get('name'),
        email=user.get('email').lower(),
        password=user.get('password'),
        phone=user.get('phone'),
        role=user.get('role'),
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

def get_categories(db: Session, current_user: dict):
    user = (
        db.query(models.User)
        .filter(models.User.email == current_user.get('sub'))
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail='User not found'
        )

    return user
