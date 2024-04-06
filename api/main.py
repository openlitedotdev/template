import cloudinary
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from api.routers.api import router_api
from api.env import API_V1
from fastapi.middleware.cors import CORSMiddleware
from api.db.conn import engine
from api.schemas import models


app = FastAPI()

load_dotenv()

models.Base.metadata.create_all(bind=engine)
config = cloudinary.config(
    secure=True,
    cloud_name="du2jpakme",
    api_key="694747433749226",
    api_secret=os.environ.get("CLOUDINARY_API_SECRET"),
)

origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://dashboard-commerce.up.railway.app/",
    "https://ui-commerce.up.railway.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_api, prefix=API_V1)
