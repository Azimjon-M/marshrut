import React, { useState } from 'react';
import './RoutesList.css';

const RoutesList = ({ routes, onRouteClick }) => {
    const [expandedRoute, setExpandedRoute] = useState(null);

    const toggleRoute = (routeNumber) => {
        setExpandedRoute(expandedRoute === routeNumber ? null : routeNumber);
    };

    const handleRouteClick = (route) => {
        toggleRoute(route.number);
        if (onRouteClick) {
            onRouteClick(route);
        }
    };

    return (
        <div className="routes-list">
            <div className="routes-list-header">
                <h2>
                    <span className="header-icon">🚌</span>
                    Joriy marshrutlar
                </h2>
                <div className="routes-count">{routes.length} ta</div>
            </div>
            <div className="routes-container">
                {routes.map((route, index) => (
                    <div
                        key={index}
                        className={`route-card ${expandedRoute === route.number ? 'expanded' : ''}`}
                        onClick={() => handleRouteClick(route)}
                    >
                        <div className="route-card-header">
                            <div className="route-main-info">
                                <span
                                    className="route-number"
                                    style={{ backgroundColor: route.color }}
                                >
                                    № {route.number}
                                </span>
                                <div className="route-path">
                                    <span className="route-from">{route.from}</span>
                                    <span className="route-arrow">→</span>
                                    <span className="route-to">{route.to}</span>
                                </div>
                            </div>
                            <div className="route-meta">
                                <span className="route-status">{route.status}</span>
                                <span className="route-time">⏱ {route.time}</span>
                            </div>
                        </div>

                        {route.distance && (
                            <div className="route-stats">
                                <div className="stat-item">
                                    <span className="stat-icon">📏</span>
                                    <span className="stat-value">{route.distance}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-icon">⏰</span>
                                    <span className="stat-value">{route.duration}</span>
                                </div>
                            </div>
                        )}

                        {route.stops && expandedRoute === route.number && (
                            <div className="route-stops">
                                <div className="stops-title">Bekatlar:</div>
                                <div className="stops-list-items">
                                    {route.stops.map((stop, idx) => (
                                        <div key={idx} className="stop-item-inline">
                                            <span className="stop-number">{idx + 1}</span>
                                            <span className="stop-name">{stop.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="expand-indicator">
                            {expandedRoute === route.number ? '▲' : '▼'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoutesList;
