import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, NavigationActions, Section, FossilUsageActions } from '../../state';
import { EmissionsChart } from './EmissionsChart';
import { Translate } from 'react-i18nify';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Button } from 'reactstrap';

class _EmissionCalculator extends React.Component<any> {
    render() {
        const { transport, patchTransportUsage, fossilEmission } = this.props;

        const refEmissions = { consumption: 6, transport: 19, result: 25 };
        const maxEmission = 1.5 * Math.max(refEmissions.result, fossilEmission.result);

        return (
            <React.Fragment>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Translate value="application.title" />
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">km</InputGroupAddon>
                                    <Input placeholder="Car travel per week" type="number" step="1"
                                        value={transport.carKmPerWeek}
                                        onChange={event => patchTransportUsage({ carKmPerWeek: event.currentTarget.value })} />
                                </InputGroup>
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={fossilEmission} limit={maxEmission} label='You' />
                            </div>
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                                <EmissionsChart emission={refEmissions} limit={maxEmission} label='Avg' />
                            </div>
                        </div>
                    </CardBody>
                    <CardBody>
                    </CardBody>
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