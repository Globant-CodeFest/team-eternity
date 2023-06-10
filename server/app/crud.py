from functools import lru_cache
from datos.script_to_datos import DatosClimate


@lru_cache()
def fetch_initial_data() -> DatosClimate:
    data = DatosClimate('datos/data_inicial.csv')
    return data



