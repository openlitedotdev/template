import bcrypt

salt = bcrypt.gensalt()


def get_password_hash(password: str):
    enconde_password = password.encode()
    passowrd_hashed = bcrypt.hashpw(enconde_password, salt)
    return passowrd_hashed


def verify_password(plain_password: str, hashed_password: str):
    hashed_password = hashed_password.encode("utf-8")
    enconde_password = plain_password.encode("utf-8")
    return bcrypt.checkpw(enconde_password, hashed_password)
