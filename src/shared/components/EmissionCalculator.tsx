import React from 'react';
import { Translate } from 'react-i18nify';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Input, InputGroup, InputGroupAddon, Alert, CardFooter } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, FossilUsageActions } from '../../state';
import { EmissionsChart } from './EmissionsChart';

class _EmissionCalculator extends React.Component<any> {
    render() {
        const { transport, patchTransportUsage, fossilEmission } = this.props;

        const refEmissions = { consumption: 6, transport: 19, result: 25 };
        const maxEmission = 1.5 * Math.max(refEmissions.result, fossilEmission.result);

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
                                <h6>
                                    <Translate value="transport.enterWeeklyCarUsage" />
                                </h6>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">km</InputGroupAddon>
                                    <Input placeholder="Car travel per week" type="number" step="1"
                                        value={transport.carKmPerWeek}
                                        onChange={event => patchTransportUsage({ carKmPerWeek: event.currentTarget.value })} />
                                </InputGroup>
                                <h6 className="pt-5">
                                    <Translate value="emissions.yourAnnualEmissionsAre" emissions={Math.round(fossilEmission.result)} />
                                </h6>
                                <Alert color="danger">
                                    <Translate value="emissions.yourEmissionsAreTooHigh" />
                                </Alert>
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={fossilEmission} limit={maxEmission} label='You' />
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={refEmissions} limit={maxEmission} label='Avg' />
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

function mapStateToProps({ fossilUsage, fossilEmission }: AppState) {
    return {
        transport: fossilUsage.transport,
        fossilEmission: fossilEmission
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            patchTransportUsage: FossilUsageActions.PatchTransportUsage
        },
        dispatch
    );
}

export const EmissionCalculator = connect(
    mapStateToProps,
    mapDispatchToProps
)(_EmissionCalculator);