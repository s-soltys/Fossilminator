import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown, LabelledInput } from '../components';

class _PublicTransportForm extends React.Component<any> {
    renderSectionA() {
        const { transport, UpdatePublicTransport } = this.props;

        return (
            <>
                <h4 className="font-weight-light">Transport:</h4>
                <div>
                    <div className="w-75">
                        <LabelledInput
                            label="transport.enterWeeklyCarUsage"
                            addon="km"
                            placeholder="Ile km podróżujesz samochodem tygodniowo?"
                            value={transport.carKmPerWeek}
                            valueChange={value => UpdatePublicTransport({ carKmPerWeek: value })}>
                        </LabelledInput>
                    </div>
                </div>
                <div className="pt-3">
                    <div className="w-75">
                        <LabelledInput
                            label="transport.enterAnnualPlaneHours"
                            addon="godziny"
                            placeholder="Ile godzin spędzasz rocznie w podróży samolotem?"
                            value={transport.annualHoursInAir}
                            valueChange={value => UpdatePublicTransport({ annualHoursInAir: value })}>
                        </LabelledInput>
                    </div>
                </div>
            </>
        );
    }


    renderSectionB() {
        const { food, UpdateFood } = this.props;

        const options = [
            { value: 0, label: 'Jestem wegetarianinem/-ką' },
            { value: 1, label: 'Raz w tygodniu' },
            { value: 2, label: 'Dość rzadko' },
            { value: 7, label: 'Codziennie' }
        ];

        return (
            <>
                <h4 className="font-weight-light">Żywność:</h4>
                <div>
                    <LabelledDropdown
                        label="food.howOftenDoYouConsumeFood"
                        value={food.meatPerWeek}
                        valueChange={value => UpdateFood({ meatPerWeek: value })}
                        options={options}>
                    </LabelledDropdown>
                </div>
            </>
        );
    }

    render() {
        return (
            <EmissionFormWrapper title="Housing">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {this.renderSectionA()}
                    </div>
                    <div className="col-12 col-md-6">
                        {this.renderSectionB()}
                    </div>
                </div>
            </EmissionFormWrapper>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        transport: emissionInput.transport,
        food: emissionInput.food
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            UpdatePublicTransport: EmissionInputActions.UpdatePublicTransport,
            UpdateFood: EmissionInputActions.UpdateFood
        },
        dispatch
    );
}

export const PublicTransportForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(_PublicTransportForm);