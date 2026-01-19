import React, { useState } from 'react';
import RoutesList from '../RoutesList';
import Map from '../Map';
import './App.css';

const App = () => {
    // Sample route data
    const [routes] = useState([
        {
            number: '1',
            from: 'Chilonzor',
            to: 'Yunusobod',
            status: 'Faol',
            time: '10:30',
            color: '#667eea',
            coordinates: [
                [41.2756, 69.2036],
                [41.3111, 69.2797]
            ]
        },
        {
            number: '12',
            from: 'Sergeli',
            to: 'Amir Temur',
            status: 'Faol',
            time: '11:15',
            color: '#f093fb',
            coordinates: [
                [41.2178, 69.2228],
                [41.2995, 69.2401]
            ]
        },
        {
            number: '23',
            from: 'Qoyliq',
            to: 'Minor',
            status: 'Faol',
            time: '09:45',
            color: '#4facfe',
            coordinates: [
                [41.3422, 69.2078],
                [41.2847, 69.2492]
            ]
        },
        {
            number: '34',
            from: 'Olmazor',
            to: 'Yashnobod',
            status: 'Faol',
            time: '12:00',
            color: '#43e97b',
            coordinates: [
                [41.2847, 69.1992],
                [41.2869, 69.2897]
            ]
        }
    ]);

    return (
        <div className="app">
            <RoutesList routes={routes} />
            <Map routes={routes} />
        </div>
    );
};

export default App;
