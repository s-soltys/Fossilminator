import React from 'react';

export const EmissionsChart = ({ emission, limit, label }) => {
    const transportPerc = emission.transport / limit * 100;
    const foodPerc = emission.food / limit * 100;

    return (
        <div className="d-flex flex-column justify-content-end align-items-center" style={{ height: 300, width: 80 }}>
            <strong className="text-center">{ label }</strong>
            <small>{Math.round(emission.result)} ton CO2</small>
            <div className="chart-segment" style={{ height: `${transportPerc}%`, width: '100%', backgroundColor: 'MediumPurple' }}></div>
            <div className="chart-segment" style={{ height: `${foodPerc}%`, width: '100%', backgroundColor: 'MediumBlue' }}></div>
        </div>
    );
}