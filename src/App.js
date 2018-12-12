import React, { Component } from 'react';
import './style/style.scss';

import { I18n } from 'react-i18nify';

import { NavigationHeader } from './navigation/components/NavigationHeader';
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
                    <WelcomePage title={I18n.t('application.title')} />
                </Page>
            </React.Fragment>
        );
    }
}

export default App;
