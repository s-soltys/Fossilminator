import React from 'react';

export class EmissionDetails extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-start align-items-end">
                <div><small className="pr-1">Food</small>100</div>
                <div><small className="pr-1">Consumption</small>200</div>
                <div><small className="pr-1">Flight</small>400</div>
                <div><small className="pr-1">Car travel</small>100</div>
            </div>
        );
    }
}