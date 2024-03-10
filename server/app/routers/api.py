from app.routers.v1 import users, products, categories
from fastapi import APIRouter


router_api = APIRouter()

router_api.include_router(users.router, prefix="/auth", tags=["Authentication"])
router_api.include_router(
    products.router, prefix="/products", tags=["Products Commerce"]
)
router_api.include_router(
    categories.router, prefix="/categories", tags=["Categories Commerce"]
)
