import React from 'react';

export const EmissionsChart = ({ emission, limit, label }: any) => {
    const transportPerc = emission.transport / limit * 100;
    const foodPerc = emission.food / limit * 100;

    return (
        <div className="d-flex flex-column justify-content-end align-items-center">
            <small className="text-center font-weight-light">{ label }</small>
            <small className="font-weight-bold">{Math.round(emission.result)} ton CO<sub>2</sub></small>
            <div className="chart-segment" style={{ height: `${transportPerc}%`, width: '100%', backgroundColor: 'MediumPurple' }}></div>
            <div className="chart-segment" style={{ height: `${foodPerc}%`, width: '100%', backgroundColor: 'MediumBlue' }}></div>
        </div>
    );
}