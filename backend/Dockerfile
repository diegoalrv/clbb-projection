FROM python:3.9

WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt
EXPOSE 5000

COPY . /app

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]
