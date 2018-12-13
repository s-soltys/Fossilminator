import React from 'react';
import { Translate } from 'react-i18nify';
import { Logo } from '../../shared/components//Logo/Logo';

export const NavigationHeader = () => (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <span className="navbar-brand">
                <Logo />
                <Translate value="application.title" />
            </span>
        </nav>
    </header>
);