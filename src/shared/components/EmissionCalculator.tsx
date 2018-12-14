import React from 'react';
import { Translate } from 'react-i18nify';
import { connect } from 'react-redux';
import { Card, CardBody, CardFooter, CardHeader, Input, InputGroup, InputGroupAddon, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, FossilUsageActions } from '../../state';
import { EmissionAlertBadge } from './EmissionAlertBadge';
import { EmissionsChart } from './EmissionsChart';

class _EmissionCalculator extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    renderWeeklyMeatConsumptionDropdown() {
        const { food, patchFoodUsage } = this.props;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    { food.meatPerWeek } razy w tygodniu
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onChange={_ => patchFoodUsage({ meatPerWeek: 0 })}>Jestem wegetarianinem/ką</DropdownItem>
                    <DropdownItem onChange={_ => patchFoodUsage({ meatPerWeek: 1 })}>Raz w tygodniu</DropdownItem>
                    <DropdownItem onChange={_ => patchFoodUsage({ meatPerWeek: 7 })}>Codziennie</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

    renderInputs() {
        const { transport, patchTransportUsage, fossilEmission } = this.props;

        return (
            <React.Fragment>
                <h4 className="font-weight-light">Transport:</h4>
                <div>
                    <Translate className="font-weight-light" value="transport.enterWeeklyCarUsage" />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">km</InputGroupAddon>
                        <Input placeholder="Ile km podróżujesz samochodem tygodniowo" type="number" step="1"
                            value={transport.carKmPerWeek}
                            onChange={event => patchTransportUsage({ carKmPerWeek: event.currentTarget.value })} />
                    </InputGroup>
                </div>
                <div className="pt-3">
                    <Translate className="font-weight-light" value="transport.enterAnnualPlaneHours" />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">godziny</InputGroupAddon>
                        <Input placeholder="Ile godzin spędzasz rocznie w podróży samolotem?" type="number" step="1"
                            value={transport.annualHoursInAir}
                            onChange={event => patchTransportUsage({ annualHoursInAir: event.currentTarget.value })} />
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
                        <Translate value="emissions.yourAnnualEmissionsAre" emissions={Math.round(fossilEmission.result)} />
                    </h6>
                    <EmissionAlertBadge />
                </div>
            </React.Fragment>
        )
    }
    render() {
        const { fossilEmission } = this.props;
        const refEmissions = { food: 6, transport: 19, result: 25 };
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
                                {this.renderInputs()}
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
        food: fossilUsage.food,
        fossilEmission: fossilEmission
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            patchTransportUsage: FossilUsageActions.PatchTransportUsage,
            patchFoodUsage: FossilUsageActions.PatchFoodUsage
        },
        dispatch
    );
}

export const EmissionCalculator = connect(
    mapStateToProps,
    mapDispatchToProps
)(_EmissionCalculator);