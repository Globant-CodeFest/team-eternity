# server/app/config.py

# Let's define our environment variables


import logging
from functools import lru_cache

from pydantic import BaseSettings


log = logging.getLogger("uvicorn")


class Settings(BaseSettings):
    environment: str = "dev"
    testing: bool = bool(0)
    database_url: str = None

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings() -> BaseSettings:
    log.info("Loading config settings from the environment...")
    return Settings()
