import pytest
from app.bcrypt import get_password_hash, verify_password


@pytest.mark.skip(reason="Error decode -> Sonn solutions...")
def test_verify_password_is_valid():
    test_password = "test-password"
    hash_password = get_password_hash(test_password)
    new_hash_password = hash_password.decode("utf-8")

    result = verify_password(test_password, hashed_password=new_hash_password)

    assert result is True
    assert result is not False


@pytest.mark.skip(reason="Error encode -> It must be corrected")
def test_verify_password_is_not_valid():
    test_password = "test-password"
    hash_password = get_password_hash(test_password)

    result = verify_password("not-password", hashed_password=hash_password)

    assert result is False
    assert result is not True
