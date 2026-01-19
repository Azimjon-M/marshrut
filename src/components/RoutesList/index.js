import React from 'react';
import './RoutesList.css';

const RoutesList = ({ routes }) => {
    return (
        <div className="routes-list">
            <h2>Joriy marshrutlar</h2>
            <div className="routes-container">
                {routes.map((route, index) => (
                    <div key={index} className="route-item">
                        <div className="route-info">
                            <span className="route-number">№ {route.number}</span>
                            <span className="route-path">
                                {route.from} → {route.to}
                            </span>
                        </div>
                        <div className="route-details">
                            <span className="route-status">{route.status}</span>
                            <span className="route-time">{route.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoutesList;
