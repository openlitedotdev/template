from pydantic import BaseModel


class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    phone: str
    role: str = "user"


class UserLogin(BaseModel):
    email: str
    password: str


class User(BaseModel):
    name: str
    email: str
    password: str
    phone: str
    role: str = "user"


class CategoryCreate(BaseModel):
    name: str
    image: str
    description: str
    image_publi_id: str


class ProductCreate(BaseModel):
    name: str
    image: str
    price: str
    is_offer: bool
    offer_price: int
    punctuation: int
    quantity: int
    description: str
    brand: str
    category_id: int
