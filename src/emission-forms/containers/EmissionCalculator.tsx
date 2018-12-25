import React from 'react';
import { Translate } from 'react-i18nify';
import { connect } from 'react-redux';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { LabelledInput, LabelledDropdown } from '../components';

class _EmissionCalculator extends React.Component<any> {
    renderSectionA() {
        const { transport, UpdatePublicTransport } = this.props;

        return (
            <>
                <h4 className="font-weight-light">Transport:</h4>
                <div>
                    <Translate className="font-weight-light" value="transport.enterWeeklyCarUsage" />
                    <div className="w-50">
                        <LabelledInput
                            addon="km"
                            placeholder="Ile km podróżujesz samochodem tygodniowo?"
                            value={transport.carKmPerWeek}
                            valueChange={value => UpdatePublicTransport({ carKmPerWeek: value })}>
                        </LabelledInput>
                    </div>
                </div>
                <div className="pt-3">
                    <Translate className="font-weight-light" value="transport.enterAnnualPlaneHours" />
                    <div className="w-50">
                        <LabelledInput
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
                    <Translate className="font-weight-light" value="food.howOftenDoYouConsumeFood" />
                    <LabelledDropdown 
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
            <React.Fragment>
                <Card>
                    <CardHeader>
                        <h4 className="font-weight-light">
                            <Translate value="application.title" />
                        </h4>
                    </CardHeader>
                    <CardBody>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                {this.renderSectionA()}
                            </div>
                            <div className="col-12 col-md-6">
                                {this.renderSectionB()}
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div className="font-weight-light d-flex justify-content-between">
                            <span>Wersja demo zmodernizowanego kalkulatora CO2</span>
                            <span>Więcej na <a href="https://ziemianarozdrozu.pl/">ziemianarozdrozu.pl</a></span>
                        </div>
                    </CardFooter>
                </Card>
            </React.Fragment>
        );
    }
}

function mapStateToProps({ emissionInput, emissionResult }: AppState) {
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

export const EmissionCalculator = connect(
    mapStateToProps,
    mapDispatchToProps
)(_EmissionCalculator);