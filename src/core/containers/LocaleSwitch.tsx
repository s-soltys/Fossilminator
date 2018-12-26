import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTranslate } from "../../i18n";
import { AppState, NavigationActions } from "../../state";

class _LocaleSwitch extends React.Component<any> {
    render() {
        const { t } = this.props;

        return (
            <div className="d-flex">
                <span>{t('locale.selectLanguage')}</span>
                <span className="pl-2">{t('locale.en')}</span>
                <span className="pl-2">{t('locale.pl')}</span>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({
        setLocale: NavigationActions.SetLocale
    }, dispatch);
}

export const LocaleSwitch = connect(
    mapStateToProps,
    mapDispatchToProps,
)(withTranslate(_LocaleSwitch));
