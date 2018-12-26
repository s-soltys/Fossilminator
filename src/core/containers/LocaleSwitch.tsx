import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTranslate } from "../../i18n";
import { AppState, NavigationActions } from "../../state";

const LOCALES = ["en", "pl"];

class _LocaleSwitch extends React.Component<any> {
    render() {
        const { t, setLocale } = this.props;

        return (
            <div className="d-flex">
                <span>{t("locale.selectLanguage")}</span>
                {LOCALES.map(locale => (
                    <span
                        key={locale}
                        onClick={() => setLocale(locale)}
                        className="pl-2 pointer"
                    >
                        {t(`locale.${locale}`)}
                    </span>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            setLocale: NavigationActions.SetLocale
        },
        dispatch
    );
}

export const LocaleSwitch = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslate(_LocaleSwitch));
