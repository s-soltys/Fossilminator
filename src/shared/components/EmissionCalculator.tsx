import React from 'react';
import { Translate } from 'react-i18nify';
import { connect } from 'react-redux';
import { Card, CardBody, CardFooter, CardHeader, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionAlertBadge } from './EmissionAlertBadge';
import { EmissionsChart } from './EmissionsChart';
import { LabelledDropdown } from './LabelledDropdown';

class _EmissionCalculator extends React.Component<any, any> {
    renderWeeklyMeatConsumptionDropdown() {
        const { food, UpdateFood } = this.props;

        const options = [
            { value: 0, label: 'Jestem wegetarianinem/-ką' },
            { value: 1, label: 'Raz w tygodniu' },
            { value: 2, label: 'Dość rzadko' },
            { value: 7, label: 'Codziennie' }
        ];

        return (
            <LabelledDropdown 
                value={food.meatPerWeek}
                valueChange={value => UpdateFood({ meatPerWeek: value })}
                options={options}>
            </LabelledDropdown>
        );
    }

    renderInputs() {
        const { transport, UpdatePublicTransport, emissionResult } = this.props;

        return (
            <React.Fragment>
                <h4 className="font-weight-light">Transport:</h4>
                <div>
                    <Translate className="font-weight-light" value="transport.enterWeeklyCarUsage" />
                    <InputGroup className="w-50">
                        <InputGroupAddon addonType="prepend">km</InputGroupAddon>
                        <Input placeholder="Ile km podróżujesz samochodem tygodniowo" type="number" step="1"
                            value={transport.carKmPerWeek}
                            onChange={event => UpdatePublicTransport({ carKmPerWeek: event.currentTarget.value })} />
                    </InputGroup>
                </div>
                <div className="pt-3">
                    <Translate className="font-weight-light" value="transport.enterAnnualPlaneHours" />
                    <InputGroup className="w-50">
                        <InputGroupAddon addonType="prepend">godziny</InputGroupAddon>
                        <Input placeholder="Ile godzin spędzasz rocznie w podróży samolotem?" type="number" step="1"
                            value={transport.annualHoursInAir}
                            onChange={event => UpdatePublicTransport({ annualHoursInAir: event.currentTarget.value })} />
                    </InputGroup>
                </div>
                <hr className="m-4" />
                <h4 className="font-weight-light">Żywność:</h4>
                <div>
                    <Translate className="font-weight-light" value="food.howOftenDoYouConsumeFood" />
                    {this.renderWeeklyMeatConsumptionDropdown()}
                </div>
                <hr className="m-4" />
                <div>
                    <h6>
                        <Translate value="emissions.yourAnnualEmissionsAre" emissions={Math.round(emissionResult.result)} />
                    </h6>
                    <EmissionAlertBadge />
                </div>
            </React.Fragment>
        )
    }
    render() {
        const { emissionResult } = this.props;
        const refEmissions = { food: 6, transport: 19, result: 25 };
        const maxEmission = 1.2 * Math.max(refEmissions.result, emissionResult.result);

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
                                {this.renderInputs()}
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={emissionResult} limit={maxEmission} label='Twoja emisja' />
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={refEmissions} limit={maxEmission} label='Średnia' />
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
        food: emissionInput.food,
        emissionResult: emissionResult
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