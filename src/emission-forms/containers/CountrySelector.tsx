import React from 'react';
import { Translate } from 'react-i18nify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { LabelledDropdown } from '../components';

const OPTIONS = [
    { value: 'pl', label: 'Polska' },
    { value: 'gb', label: 'Wielka Brytania' },
    { value: 'us', label: 'Stany Zjednoczone' },
    { value: 'de', label: 'Niemcy' }
];

class _CountrySelector extends React.Component<any> {
    render() {
        const { countryCode, SetCountryCode } = this.props;

        return (
            <LabelledDropdown
                label="country.selectCountry"
                value={countryCode}
                valueChange={value => SetCountryCode(value)}
                options={OPTIONS}>
            </LabelledDropdown>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        countryCode: emissionInput.country.countryCode
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            SetCountryCode: EmissionInputActions.SetCountryCode
        },
        dispatch
    );
}

export const CountrySelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(_CountrySelector);