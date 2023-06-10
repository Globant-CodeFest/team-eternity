import pandas as pd
import warnings

import json


class DatosClimate:

    def __init__(self, path_to_data: str):
        self.df = pd.read_csv(path_to_data)

    def llamado_inicial(self):
        df = self.df[['Disaster Subgroup', 'Country', 'Year']]
        df_filtrado = df.groupby(['Country', 'Disaster Subgroup']).count()
        df_filtrado.rename(columns={'Year': 'Ocurrencias'}, inplace=True)
        result = df_filtrado.reset_index().groupby('Country').apply(
            lambda x: x.set_index('Disaster Subgroup').to_dict()['Ocurrencias']).reset_index().rename(
            columns={0: 'data'})
        final_result = {c:d for c,d in zip(result['Country'],result['data'])}
        return final_result

    def filtrado_grande(self, pais: str, year_min: int, year_max: int):
        df = self.df[
            ['Disaster Subgroup', 'Year', 'Country', 'Total Deaths', 'Total Affected', 'No Injured', 'No Homeless',
             'No Affected']]
        df_filtrado = df[(df['Country'] == pais) & (df['Year'] >= year_min) & (df['Year'] <= year_max)][
            ['Disaster Subgroup', 'Total Deaths', 'Total Affected', 'No Injured', 'No Homeless',
             'No Affected']].groupby('Disaster Subgroup').sum()

        return df_filtrado

    def filtrado_chico(self, subgrupo: list, pais: str, year_min: int, year_max: int):
        df = self.df[
            ['Disaster Subgroup', 'Year', 'Country', 'Total Deaths', 'Total Affected', 'No Injured', 'No Homeless',
             'No Affected']]
        df_filtrado = df[
            (df['Disaster Subgroup'].isin(subgrupo)) & (df['Country'] == pais) & (df['Year'] >= year_min) & (
                        df['Year'] <= year_max)][
            ['Year', 'Total Deaths', 'Total Affected', 'No Injured', 'No Homeless', 'No Affected']].groupby(
            'Year').sum()
        return df_filtrado
