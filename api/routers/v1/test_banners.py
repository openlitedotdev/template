from api.main import app
from fastapi.testclient import TestClient
from api.env import API_V1


client = TestClient(app)


def test_get_banners():
    STATUS_CODE = 200
    RESPONSE = []

    response = client.get(f"{API_V1}/banners/get")

    assert response.status_code == STATUS_CODE

    data = response.json()

    assert data == RESPONSE
