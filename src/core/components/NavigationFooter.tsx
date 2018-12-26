import React from 'react';
import { LocaleSwitch } from '../containers';

export const NavigationFooter = () => (
    <footer className="footer mt-auto py-3">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="text-muted">
                        Wersja demo kalkulatora CO2
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="text-muted">
                        <LocaleSwitch />
                    </div>
                </div>
                <div className="col-12 col-md-4 text-md-right">
                    <div className="text-muted">
                        Więcej na <a href="https://ziemianarozdrozu.pl/">ziemianarozdrozu.pl</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);