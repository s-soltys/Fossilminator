import React from 'react';
import { EmissionCalculator } from '../../emission-forms';

export const Page = () => (
    <main role="main" className="container">
        <div className="row">
            <div className="col-12">
                <EmissionCalculator />
            </div>
        </div>
    </main>
);