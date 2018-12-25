import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-i18nify';

import './style/style.scss';

import { NavigationHeader } from './core/components/NavigationHeader';
import { Page } from './core/components/Page';
import { WelcomePage } from './core/components/WelcomePage';

class App extends Component {
    componentDidMount() {
        document.title = I18n.t('application.title');
    }

    render() {
        return (
            <React.Fragment>
                <NavigationHeader />
                <Page>
                    <WelcomePage />
                </Page>
            </React.Fragment>
        );
    }
}

export default connect()(App);
