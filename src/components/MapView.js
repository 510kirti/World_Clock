import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView({ onAddClock }) {
  const [popupData, setPopupData] = useState(null);
  const [addedCountries, setAddedCountries] = useState([]);

  // Helper function to get country name from lat/lng using Nominatim API
  const fetchCountryFromCoords = async (lat, lon) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    return data?.address?.country || 'Unknown';
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        const country = await fetchCountryFromCoords(lat, lng);
        setPopupData({ lat, lng, country });
      },
    });
    return null;
  };

    const handleAddClock = (country) => {
    if (!addedCountries.includes(country)) {
      onAddClock(country);
      setAddedCountries([...addedCountries, country]);
    }
  };

  return (
    <div className="my-5" style={{ height: '500px' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        
        {popupData && (
          <Popup
            position={[popupData.lat, popupData.lng]}
            onClose={() => setPopupData(null)}
            autoClose={false}
            closeOnClick={false}
          >
            <div className="text-center">
              <strong>{popupData.country}</strong>
              <br />
              {addedCountries.includes(popupData.country) ? (
                <button className="btn btn-sm btn-secondary mt-2" disabled>
                  ✅ Clock Added
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-success mt-2"
                  onClick={() => handleAddClock(popupData.country)}
                >
                  ➕ Add Clock of this Country
                </button>
              )}
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;
