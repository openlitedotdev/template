def response(message: str, db: list = [], status: int = 200):
    return {"message": message, "db": db, "status": status}
