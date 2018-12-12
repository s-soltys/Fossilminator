import React from 'react';

import { Translate } from 'react-i18nify';

export const NavigationHeader = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <span className="navbar-brand">
            <Translate value="application.title" />
        </span>
        </nav>
    </header>
);