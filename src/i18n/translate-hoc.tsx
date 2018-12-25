import React from "react";
import { I18n } from "react-i18nify";
import { LocaleConfig } from "./config";

const tFn = I18n.t.bind(I18n);
const lFn = I18n.l.bind(I18n);

export interface InjectedTranslateProps {
    t: Function;
    l: Function;
}

export function withTranslate<P>(
    Component: React.ComponentType<P>
) {
    return class WithTranslate extends React.Component<P> {
        private sub: Function;

        componentWillMount() {
            this.sub = LocaleConfig.subscribeToChangeLocale(() => {
                this.forceUpdate();
            });
        }

        componentWillUnmount() {
            this.sub && this.sub();
        }

        render() {
            return <Component {...this.props} t={tFn} l={lFn} />;
        }
    };
}
