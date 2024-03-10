FROM python:latest

WORKDIR /app

COPY requirements.txt requirements-dev.txt /app/

RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    pip install -r requirements-dev.txt

COPY . /app

EXPOSE 8888

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
