import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-i18nify';
import { SectionTabs, SectionFormContainer, ResultViewContainer, NavigationHeader } from './core';

import './style/style.scss';

class App extends Component {
    componentDidMount() {
        document.title = I18n.t('application.title');
    }

    render() {
        return (
            <React.Fragment>
                <NavigationHeader />
                <main role="main" className="container">
                    <ResultViewContainer />
                    <SectionTabs />
                    <SectionFormContainer />
                </main>
            </React.Fragment>
        );
    }
}

export default connect()(App);
