from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# Dev
SQLALCHEMY_DATABASE_URL = "sqlite:///commerce.sqlite"

# Prod
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    echo=True,
)

#  connect_args={"check_same_thread": False -> SQLite

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
