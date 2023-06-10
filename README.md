# Next.js Map App

Este proyecto es una aplicación de mapas construida con Next.js y React. La aplicación muestra marcadores en un mapa
 de Google y proporciona información relacionada con diferentes tipos de datos geográficos, incluyendo catástrofes 
 naturales y datos biológicos. El objetivo principal de este proyecto es utilizar datos históricos para predecir y 
 prevenir desastres, así como ayudar a determinar las rutas de comercio internacional. Además, la aplicación busca 
 brindar apoyo a las personas afectadas por catástrofes naturales.

## Instalación

Sigue los pasos a continuación para configurar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

4. Configura las claves de la API de Google Maps en el archivo `Map.tsx`. Asegúrate de reemplazar `'TU_API_KEY'` con tu propia clave.

5. Ejecuta el siguiente comando para iniciar la aplicación en modo de desarrollo:

   ```
   npm run dev
   ```

6. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Características

- Muestra marcadores en un mapa de Google basados en datos geográficos.
- Proporciona información detallada sobre cada marcador al hacer clic en ellos.
- Utiliza la librería `react-geocode` para obtener las coordenadas geográficas de diferentes países.
- Los datos de los marcadores se almacenan en un archivo JSON ubicado en `public/data.json`.

## Tecnologías utilizadas

- Next.js: Framework de React para la construcción de aplicaciones web del lado del servidor (SSR).
- React: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- Google Maps API: API de Google para la integración de mapas interactivos.
- react-google-maps/api: Biblioteca de React para facilitar el uso de la API de Google Maps.
- react-geocode: Biblioteca de React para la obtención de coordenadas geográficas a partir de direcciones.
- Tailwind CSS: Framework de CSS para la creación rápida y fácil de estilos y diseños responsivos.

## Estructura del proyecto

- **pages/index.tsx**: Página principal que muestra el mapa y los marcadores.
- **components/Map.tsx**: Componente que renderiza el mapa de Google y los marcadores.
- **public/data.json**: Archivo JSON que contiene los datos de los marcadores.
- **styles/globals.css**: Archivo CSS global con estilos adicionales utilizados en la aplicación.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Realiza un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y realiza commits describiendo tus modificaciones (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Crea una solicitud de extracción en este repositorio.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Para obtener más información, consulta el archivo [LICENSE](LICENSE).