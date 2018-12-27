import React from 'react';
import { Translate } from 'react-i18nify';
import { LocaleSwitch } from '../containers';

export const NavigationFooter = () => (
    <footer className="footer mt-auto py-3">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="text-muted">
                        <Translate value="application.footerName" />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="text-muted">
                        <LocaleSwitch />
                    </div>
                </div>
                <div className="col-12 col-md-4 text-md-right">
                    <div className="text-muted">
                        <Translate dangerousHTML value="application.footerLink" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);