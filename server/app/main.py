# project/app/main.py

# create a FastAPI project

from fastapi import FastAPI, Depends
from app.config import get_settings, Settings

from app.crud import fetch_initial_data

app = FastAPI()

base_url = "/api/v1"

@app.get("/ping")
async def pong(settings: Settings = Depends(get_settings)):

    return {
        "ping": "pong!",
        "environment": settings.environment,
        "testing": settings.testing,
    }


@app.get(f"{base_url}/get-initial-data")
async def get_initial_data():
    datos = fetch_initial_data()

    json_data = datos.llamado_inicial()

    return json_data


@app.get(f"{base_url}/disasters-by-country")
async def disasters_by_country(pais: str, year_min: int, year_max: int):
    datos = fetch_initial_data()
    json_data = datos.filtrado_grande(pais, year_min, year_max)
    return json_data


@app.get(f"{base_url}/disasters-by-subgroup")
async def disasters_by_subgroup(subgrupo: str, pais: str, year_min: int, year_max: int):
    subgrupo_list = subgrupo.split(",")
    datos = fetch_initial_data()
    json_data = datos.filtrado_chico(subgrupo_list, pais, year_min, year_max)
    return json_data
