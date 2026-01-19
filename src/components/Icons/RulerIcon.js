import React from 'react';

const RulerIcon = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V10H11V15ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM19 15H17V10H19V15Z" fill={color} />
    </svg>
);

export default RulerIcon;
