import React, { Component } from "react";
import { connect } from "react-redux";
import { I18n } from "react-i18nify";
import {
    SectionTabs,
    SectionFormContainer,
    ResultViewContainer,
    NavigationHeader,
    NavigationFooter
} from "./core";

import "./style/style.scss";
import { NavigationActions, AppState } from "./state";
import { bindActionCreators } from "redux";

class App extends Component<any> {
    componentWillMount() {
        this.props.initApp();
        document.title = I18n.t("application.title");
    }

    render() {
        return (
            <>
                <NavigationHeader />
                <main role="main" className="container">
                    <section className="mb-5">
                        <ResultViewContainer />
                    </section>
                    <section>
                        <SectionTabs />
                        <SectionFormContainer />
                    </section>
                </main>
                <NavigationFooter />
            </>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            initApp: NavigationActions.InitApp
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
