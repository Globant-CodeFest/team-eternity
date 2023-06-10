# project/app/main.py

# create a FastAPI project

from fastapi import FastAPI, Depends
from app.config import get_settings, Settings

from app.crud import fetch_initial_data

app = FastAPI()


@app.get("/ping")
async def pong(settings: Settings = Depends(get_settings)):

    return {
        "ping": "pong!",
        "environment": settings.environment,
        "testing": settings.testing,
    }


@app.get("/get-initial-data")
async def get_initial_data():
    datos = fetch_initial_data()

    json_data = datos.llamado_inicial()

    return json_data
