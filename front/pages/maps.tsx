// File: Map.js

import { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import data from '@/public/data.json';
import CountryInfo from '@/components/CountryInfo';  // Import the new component

Geocode.setApiKey('AIzaSyCL0pF8TYxlJqAVJWlfvRxOk7EN51MK7mY');
Geocode.enableDebug();

// Initialize Google Map
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const iconMapping = {
  "Biological": "4.png",
  "Climatological": "2.png",
  "Geophysical": "1.png",
  "Hydrological": "5.png",
  "Meteorological": "3.png",
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCL0pF8TYxlJqAVJWlfvRxOk7EN51MK7mY',
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const loadMarkers = async () => {
      const tempMarkers = [];

      for (const country of Object.keys(data)) {
        const response = await Geocode.fromAddress(country);
        const { lat, lng } = response.results[0].geometry.location;
        const countryData = [];

        Object.entries(data[country]).forEach(([key, value]) => {
          countryData.push({ type: key, count: value, icon: iconMapping[key] });
        });

        tempMarkers.push({ lat, lng, country, data: countryData });
      }

      setMarkers(tempMarkers);
    };

    loadMarkers();
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <CountryInfo selected={selected} />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
