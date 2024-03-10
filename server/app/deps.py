import os
from jose import jwt, ExpiredSignatureError, JWTError
from fastapi import Depends, HTTPException, status
from datetime import datetime, timedelta, timezone
from fastapi.security import OAuth2PasswordBearer
from app.db.conn import SessionLocal
from dotenv import load_dotenv

load_dotenv()

JWT_SECRET = os.environ.get("JWT_SECRET")
SECRET_KEY = os.environ.get("SECRET_KEY")
ACCESS_TOKEN_EXPIRE_MINUTES = os.environ.get("ACCESS_TOKEN_EXPIRE_MINUTES")
ALGORITHM = os.environ.get("ALGORITHM")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl=JWT_SECRET)


def create_access_token(data: dict, expires_delta: timedelta = None):
    to_enconde = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)

    to_enconde.update({"exp": expire})
    token = jwt.encode(to_enconde, SECRET_KEY, algorithm=ALGORITHM)
    return token


def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        return payload
    except ExpiredSignatureError:
        raise credentials_exception
    except JWTError:
        raise credentials_exception


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def on_validate_admin(role: str):
    if not role == "admin":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "You do not have permission, you must be admin",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )
