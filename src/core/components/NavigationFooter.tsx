import React from 'react';
import { LocaleSwitch } from '../containers';

export const NavigationFooter = () => (
    <footer className="footer mt-auto py-3">
        <div className="container d-flex justify-content-between">
            <div className="text-muted">
                Wersja demo zmodernizowanego kalkulatora CO2
            </div>
            <div>
                <LocaleSwitch />
            </div>
            <div className="text-muted">
                Więcej na <a href="https://ziemianarozdrozu.pl/">ziemianarozdrozu.pl</a>
            </div>
        </div>
    </footer>
);