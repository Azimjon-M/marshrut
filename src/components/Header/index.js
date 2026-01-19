import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-brand">
                    <h1 className="header-title">
                        <span className="title-icon">🚌</span>
                        Marshrut
                    </h1>
                    <p className="header-subtitle">Toshkent shahar jamoat transporti</p>
                </div>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <span className={`icon ${theme === 'light' ? 'active' : ''}`}>☀️</span>
                    <span className={`icon ${theme === 'dark' ? 'active' : ''}`}>🌙</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
