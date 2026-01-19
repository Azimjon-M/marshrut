import React, { useState } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Header from '../Header';
import RoutesList from '../RoutesList';
import StopsList from '../StopsList';
import Map from '../Map';
import './App.css';

const AppContent = () => {
    // Enhanced route data with stops
    const [routes] = useState([
        {
            number: '1',
            from: 'Chilonzor',
            to: 'Yunusobod',
            status: 'Faol',
            time: '10:30',
            distance: '18.5 km',
            duration: '45 daqiqa',
            color: '#667eea',
            coordinates: [
                [41.2756, 69.2036],
                [41.3111, 69.2797]
            ],
            stops: [
                { name: 'Chilonzor metro' },
                { name: 'TTZ' },
                { name: 'Olmazor bozori' },
                { name: 'Amir Temur xiyoboni' },
                { name: 'Yunusobod bozori' },
                { name: 'Yunusobod metro' }
            ]
        },
        {
            number: '12',
            from: 'Sergeli',
            to: 'Amir Temur',
            status: 'Faol',
            time: '11:15',
            distance: '15.2 km',
            duration: '38 daqiqa',
            color: '#f093fb',
            coordinates: [
                [41.2178, 69.2228],
                [41.2995, 69.2401]
            ],
            stops: [
                { name: 'Sergeli' },
                { name: 'Qo\'yliq' },
                { name: 'Minor' },
                { name: 'Chilonzor' },
                { name: 'Amir Temur' }
            ]
        },
        {
            number: '23',
            from: 'Qoyliq',
            to: 'Minor',
            status: 'Faol',
            time: '09:45',
            distance: '12.8 km',
            duration: '32 daqiqa',
            color: '#4facfe',
            coordinates: [
                [41.3422, 69.2078],
                [41.2847, 69.2492]
            ],
            stops: [
                { name: 'Qo\'yliq' },
                { name: 'Maksim Gorkiy' },
                { name: 'Chorsu' },
                { name: 'Eski shahar' },
                { name: 'Minor' }
            ]
        },
        {
            number: '34',
            from: 'Olmazor',
            to: 'Yashnobod',
            status: 'Faol',
            time: '12:00',
            distance: '16.4 km',
            duration: '41 daqiqa',
            color: '#43e97b',
            coordinates: [
                [41.2847, 69.1992],
                [41.2869, 69.2897]
            ],
            stops: [
                { name: 'Olmazor' },
                { name: 'Mirzo Ulug\'bek' },
                { name: 'Alisher Navoiy' },
                { name: 'Hamid Olimjon' },
                { name: 'Yashnobod bozori' }
            ]
        }
    ]);

    return (
        <>
            <Header />
            <div className="app-container">
                <StopsList routes={routes} />
                <div className="main-content">
                    <RoutesList routes={routes} />
                    <Map routes={routes} />
                </div>
            </div>
        </>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <div className="app">
                <AppContent />
            </div>
        </ThemeProvider>
    );
};

export default App;
