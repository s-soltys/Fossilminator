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

class App extends Component {
    componentDidMount() {
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

export default connect()(App);
