import re
from fastapi import APIRouter, HTTPException, status, Depends
from app.schemas import types
from app.schemas import models
from app.deps import create_access_token, get_db
from app.bcrypt import get_password_hash, verify_password
from sqlalchemy.orm import Session

router = APIRouter()


@router.post("/login")
async def login(user_credentials: types.UserLogin, db: Session = Depends(get_db)):
    user = user_credentials.model_dump()

    if user["email"] == "" or user["password"] == "":
        return {
            "message": "Dear user, credentials empty.",
            status: status.HTTP_204_NO_CONTENT,
        }

    db_user = db.query(models.User).filter(models.User.email == user["email"]).first()

    if db_user and verify_password(user["password"], db_user.password):
        access_token = create_access_token(data={"sub": user["email"]})
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "message": "User logger successfuly 🐶",
            "db": [],
            "status": status.HTTP_200_OK,
        }

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED, detail="Credentials invalid"
    )


@router.post("/register")
async def register(user_credentials: types.UserCreate, db: Session = Depends(get_db)):
    user = user_credentials.model_dump()

    if len(user["password"]) <= 7:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "The password must be more than 7 characters",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    patternMayus = re.compile(r"[A-Z]")

    if not patternMayus.search(user["password"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "Password must have at least one uppercase letter",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    patternCharacter = re.compile(r"[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]")

    if not patternCharacter.search(user["password"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "Password must have at least one character special",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    user["password"] = get_password_hash(user.pop("password")).decode()
    
    user_exists = (
        db.query(models.User).filter(models.User.email == user["email"]).first()
    )

    if user_exists:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "Email already registered",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    if user["role"] not in ["admin", "user"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "the selected role is incorrect",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    pattern = re.compile(r"[^@]+@[^@]+\.[^@]+")

    if not pattern.match(user["email"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "this email is not valid",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    if not user["name"] or len(user["name"]) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "the name is not valid",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
        )

    if not user["phone"].isdigit():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={
                "message": "the number is not valid",
                "db": [],
                "status": status.HTTP_400_BAD_REQUEST,
            },
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

    return {
        "message": "User create successfuly 🐶",
        "db": [],
        "status": status.HTTP_200_OK,
    }
