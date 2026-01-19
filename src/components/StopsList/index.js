import React, { useState } from 'react';
import './StopsList.css';

const StopsList = ({ routes, onStopClick }) => {
    const [selectedStop, setSelectedStop] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Extract all unique stops from routes
    const getAllStops = () => {
        const stopsMap = new Map();

        routes.forEach(route => {
            if (route.stops) {
                route.stops.forEach(stop => {
                    if (!stopsMap.has(stop.name)) {
                        stopsMap.set(stop.name, {
                            name: stop.name,
                            routes: [{ number: route.number, color: route.color }]
                        });
                    } else {
                        const existing = stopsMap.get(stop.name);
                        if (!existing.routes.find(r => r.number === route.number)) {
                            existing.routes.push({ number: route.number, color: route.color });
                        }
                    }
                });
            }
        });

        return Array.from(stopsMap.values()).sort((a, b) =>
            a.name.localeCompare(b.name, 'uz')
        );
    };

    const stops = getAllStops();
    const filteredStops = stops.filter(stop =>
        stop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleStopClick = (stop) => {
        setSelectedStop(stop.name);
        if (onStopClick) {
            onStopClick(stop);
        }
    };

    return (
        <aside className="stops-list">
            <div className="stops-header">
                <h2>
                    <span className="header-icon">📍</span>
                    Bekatlar
                </h2>
                <div className="stops-count">{stops.length} ta</div>
            </div>

            <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    placeholder="Bekat qidirish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button
                        className="clear-search"
                        onClick={() => setSearchTerm('')}
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="stops-container">
                {filteredStops.length === 0 ? (
                    <div className="no-results">
                        <span className="no-results-icon">😔</span>
                        <p>Bekat topilmadi</p>
                    </div>
                ) : (
                    filteredStops.map((stop, index) => (
                        <div
                            key={index}
                            className={`stop-item ${selectedStop === stop.name ? 'selected' : ''}`}
                            onClick={() => handleStopClick(stop)}
                        >
                            <div className="stop-name">{stop.name}</div>
                            <div className="stop-routes">
                                {stop.routes.map((route, idx) => (
                                    <span
                                        key={idx}
                                        className="route-badge"
                                        style={{ backgroundColor: route.color }}
                                    >
                                        {route.number}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </aside>
    );
};

export default StopsList;
