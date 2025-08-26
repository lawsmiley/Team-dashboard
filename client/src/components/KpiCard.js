// src/components/KpiCard.js
import React from 'react';
import './KpiCard.css';

const KpiCard = ({ title, value, icon }) => {
    return (
        <div className="kpi-card">
            <div className="kpi-icon">{icon}</div>
            <div className="kpi-details">
                <h3>{title}</h3>
                <span>{value}</span>
            </div>
        </div>
    );
};

export default KpiCard;