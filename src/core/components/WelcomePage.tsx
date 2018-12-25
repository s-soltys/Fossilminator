import React from 'react';
import { EmissionCalculator } from '../../emission-input-forms/containers/EmissionCalculator';

export const WelcomePage = () => (
    <div className="row">
        <div className="col-12">
            <EmissionCalculator />
        </div>
    </div>
);