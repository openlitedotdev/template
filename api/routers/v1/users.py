import re
from fastapi import APIRouter, HTTPException, status, Depends
from api.schemas import types
from api.deps import get_db, get_current_user
from sqlalchemy.orm import Session
from api.services import auth
from api.helpers import http

router = APIRouter()


@router.post("/login")
async def login(user_credentials: types.UserLogin, db: Session = Depends(get_db)):
    user = user_credentials.model_dump()

    results = []
    if user["email"] == "" or user["password"] == "":
        return {
            "message": "Dear user, credentials empty.",
            status: status.HTTP_204_NO_CONTENT,
        }

    token = auth.access(user=user, db=db)

    user_info = auth.get_user_by_email(user=user, db=db)

    results.append(
        {"access_token": token, "token_type": "Bearer", "id_user": user_info.id}
    )

    return http.response(message="User logger successfuly", db=results)


@router.post("/register")
async def register(user_credentials: types.UserCreate, db: Session = Depends(get_db)):
    user = user_credentials.model_dump()

    if len(user["password"]) <= 7:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="The password must be more than 7 characters",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    patternMayus = re.compile(r"[A-Z]")

    if not patternMayus.search(user["password"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="Password must have at least one uppercase letter",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    patternCharacter = re.compile(r"[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]")

    if not patternCharacter.search(user["password"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="Password must have at least one character special",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    if user["role"] not in ["admin", "user"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="The selected role is incorrect",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    pattern = re.compile(r"[^@]+@[^@]+\.[^@]+")

    if not pattern.match(user["email"]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="This email is not valid",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    if not user["name"] or len(user["name"]) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="The name is not valid",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    if not user["phone"].isdigit():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=http.response(
                message="The number is not valid",
                status=status.HTTP_400_BAD_REQUEST,
            ),
        )

    auth.create(user=user, db=db)

    return http.response(message="User register successfuly")


@router.get("/users")
async def get_users(
    db: Session = Depends(get_db), current_user: types.User = Depends(get_current_user)
):
    users = auth.get_user(current_user, db=db)

    new_users = []
    for user in users:
        new_users.append(
            {
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "role": user.role,
            }
        )

    return http.response(message="Users found", db=new_users)


@router.get("/user-by-id/{id}")
async def get_user_by_id(id: int, db: Session = Depends(get_db)):
    results = []
    user = auth.get_user_by_id(id=id, db=db)
    
    if not user:
        raise HTTPException(
            status_code=404,
            detail=http.response(
                message="User not Found",
                status=404,
            ),
        )

    results.append(user)

    return http.response(message="User found", db=results)
