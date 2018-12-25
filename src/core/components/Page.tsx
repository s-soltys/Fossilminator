import React from 'react';
import { EmissionCalculator } from '../../emission-forms';
import { SectionTabs, SectionFormContainer } from '../containers';

export const Page = () => (
    <main role="main" className="container">
        <SectionTabs />
        <SectionFormContainer />
        {/* <div className="row">
            <div className="col-12">
                <EmissionCalculator />
            </div>
        </div> */}
    </main>
);