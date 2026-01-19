import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { useTheme } from '../../context/ThemeContext';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = ({ routes }) => {
    const { theme } = useTheme();
    const center = [41.2995, 69.2401]; // Tashkent coordinates

    // Theme-aware tile layer URLs
    const tileUrl = theme === 'dark'
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const attribution = theme === 'dark'
        ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    return (
        <div className="map-wrapper">
            <div className="map-header">
                <h3>
                    <span className="map-icon">🗺️</span>
                    Xarita
                </h3>
            </div>
            <MapContainer
                center={center}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    key={theme}
                    attribution={attribution}
                    url={tileUrl}
                />

                {routes.map((route, index) => (
                    <React.Fragment key={index}>
                        {route.coordinates && route.coordinates.length > 1 && (
                            <Polyline
                                positions={route.coordinates}
                                color={route.color || '#667eea'}
                                weight={5}
                                opacity={0.8}
                            />
                        )}

                        {route.coordinates && route.coordinates.map((coord, idx) => (
                            <Marker key={idx} position={coord}>
                                <Popup>
                                    <div className="map-popup">
                                        <strong>Marshrut № {route.number}</strong>
                                        <br />
                                        <span>{idx === 0 ? route.from : route.to}</span>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </React.Fragment>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
