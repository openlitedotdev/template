from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import text
import pytest

SQLALCHEMY_DATABASE_URL = "sqlite:///test.sqlite"


engine = create_engine(
    SQLALCHEMY_DATABASE_URL, echo=True, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

@pytest.mark.skip(reason="Approve test select query")
def test_connection_sqlite():
    with engine.connect() as conn:
        query = conn.execute(text("SELECT 'Hola, Mundo'"))

        result = query.all()

        assert isinstance(result, list)


@pytest.mark.skip(reason="Approve test crete query")
def test_save_value():
    with engine.connect() as conn:
        conn.execute(text("CREATE TABLE test (x int, y int)"))
        conn.execute(
            text("INSERT INTO test (x, y) VALUES (:x, :y)"),
            [{"x": 1, "y": 1}, {"x": 2, "y": 4}],
        )

        conn.commit()


@pytest.mark.skip(reason="Approve test select query")
def test_returns_value():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT x, y FROM test"))
        for row in result:
            assert isinstance(row.x, int)
            assert isinstance(row.y, int)
