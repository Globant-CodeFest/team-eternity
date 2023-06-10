import { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import data from '@/public/data.json';

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
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    const tempMarkers = [];

    Object.keys(data).forEach((country) => {
      Geocode.fromAddress(country).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;

        Object.entries(data[country]).forEach(([key, value]) => {
          tempMarkers.push({ lat, lng, type: key, count: value, icon: iconMapping[key] });
        });
      });
    });

    setMarkers(tempMarkers);
  }, []);

  const handleZoomChanged = () => {
    if (mapRef.current) {
      setZoom(mapRef.current.getZoom());
    }
  };

  const mapRef = useRef(null);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    setZoom(map.getZoom());
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
        onLoad={onMapLoad}
        onZoomChanged={() => handleZoomChanged(mapRef.current)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `/${marker.icon}`,
              scaledSize: new window.google.maps.Size(30 / (zoom / 2), 30 / (zoom / 2)),
            }}
            label={{
              text: `${marker.type}: ${marker.count}`,
              color: 'black',
              fontSize: `${16 / (zoom / 2)}px`,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
