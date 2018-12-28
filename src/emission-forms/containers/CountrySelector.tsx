import React from 'react';
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
        const { energeticMix, countryCode, SetCountryCode } = this.props;

        return (
            <>
                <LabelledDropdown
                    label="country.selectCountry"
                    value={countryCode}
                    valueChange={value => SetCountryCode(value)}
                    options={OPTIONS}>
                </LabelledDropdown>
                <div>
                    <small>
                        Miks energetyczny: węgiel {Math.round(energeticMix.coal * 100)}%, wiatrowe {Math.round(energeticMix.wind * 100)}%, etc.
                    </small>
                </div>
            </>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        countryCode: emissionInput.country.countryCode,
        energeticMix: emissionInput.country.energeticMix
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