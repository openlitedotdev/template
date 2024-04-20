from api.main import app
from fastapi.testclient import TestClient
from api.env import API_V1

client = TestClient(app)


def test_get_category_unauthorized():
    STATUS_RESPONSE = 200
    response = client.get(f"{API_V1}/categories/get")

    assert response.status_code == STATUS_RESPONSE


def test_get_category_autorization():
    STATUS_RESPONSE = 200

    response_login = client.post(
        f"{API_V1}/auth/login",
        json={"email": "cagesev3@email.com", "password": "1234567S_*"},
    )

    token = dict(response_login.json()).get("access_token")

    headers = {"Authorization": f"Bearer {token}"}

    response = client.get(f"{API_V1}/categories/get", headers=headers)

    assert response.status_code == STATUS_RESPONSE
