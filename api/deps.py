import os
from jose import jwt, ExpiredSignatureError, JWTError
from fastapi import Depends, HTTPException, status
from datetime import datetime, timedelta, timezone
from fastapi.security import OAuth2PasswordBearer
from api.db.conn import SessionLocal
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader
import uuid
from api.helpers import http

load_dotenv()

JWT_SECRET = os.environ.get('JWT_SECRET')
SECRET_KEY = os.environ.get('SECRET_KEY')
ACCESS_TOKEN_EXPIRE_MINUTES = os.environ.get('ACCESS_TOKEN_EXPIRE_MINUTES')
ALGORITHM = os.environ.get('ALGORITHM')


oauth2_scheme = OAuth2PasswordBearer(tokenUrl=JWT_SECRET)


def create_access_token(data: dict, expires_delta: timedelta = None):
    to_enconde = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)

    to_enconde.update({'exp': expire})
    token = jwt.encode(to_enconde, SECRET_KEY, algorithm=ALGORITHM)
    return token


def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=http.response(message='Invalid credentials', status=401),
        headers={'WWW-Authenticate': 'Bearer'},
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
    if not role == 'admin':
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail= http.response(menssage='You do not have permission to perform this action', status=400),
        )
    
def save_image_cloudinary(image):
    public_id = str(uuid.uuid4())

    try:
        file_content = image.file.read()
        upload_result = cloudinary.uploader.upload(
            file_content,
            public_id=public_id,
            unique_filename=True,
            overwrite=False,
        )
        image_url = upload_result['secure_url']
        image_id = upload_result["public_id"]
    except cloudinary.exceptions.Error as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail= http.response(menssage=f'Error uploading the image: {str(e)}', status=500),
        )
    
    return image_url, image_id
