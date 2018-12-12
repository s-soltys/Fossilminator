import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, NavigationActions, Section, FossilUsageActions } from '../../state';
import { FossilUsageResult } from '../../fossil-usage';

const SECTIONS = [Section.Welcome, Section.Transport];

class _NavigationSections extends React.Component<any> {
    renderEmissions(emission: FossilUsageResult, max: number) {
        const transportPerc = emission.transport / max * 100;
        const consumptionPerc = emission.consumption / max * 100;

        return (
            <div className="d-flex flex-column justify-content-end align-items-center" style={{ height: 300, width: 80 }}>
                <small>{Math.round(emission.result)} ton CO2</small>
                <div style={{ height: `${transportPerc}%`, width: '100%', backgroundColor: 'red' }}></div>
                <div style={{ height: `${consumptionPerc}%`, width: '100%', backgroundColor: 'green' }}></div>
            </div>
        );
    }

    render() {
        const { activeSection, setSection, transport, patchTransportUsage, fossilEmission } = this.props;

        const refEmissions = { consumption: 6, transport: 19, result: 25};
        const maxEmission = 1.5 * Math.max(refEmissions.result, fossilEmission.result);

        return (
            <React.Fragment>
                <Nav tabs className="mt-5">
                    {
                        SECTIONS.map(section => (
                            <NavItem key={section}>
                                <NavLink
                                    className={classnames({ active: activeSection === section })}
                                    onClick={() => setSection(section)}>
                                    {section}
                                </NavLink>
                            </NavItem>
                        ))
                    }
                </Nav>
                <div className="row p-3">
                    <div className="col-6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">km</InputGroupAddon>
                            <Input placeholder="Car travel per week" type="number" step="1"
                                value={transport.carKmPerWeek}
                                onChange={event => patchTransportUsage({ carKmPerWeek: event.currentTarget.value })} />
                        </InputGroup>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <h6>YOU:</h6>
                        {this.renderEmissions(fossilEmission, maxEmission)}
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <h6>AVERAGE:</h6>
                        {this.renderEmissions(refEmissions, maxEmission)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps({ navigation, fossilUsage, fossilEmission }: AppState) {
    return {
        activeSection: navigation.section,
        transport: fossilUsage.transport,
        fossilEmission: fossilEmission
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            setSection: NavigationActions.SetNavigationSection,
            patchTransportUsage: FossilUsageActions.PatchTransportUsage
        },
        dispatch
    );
}

export const NavigationSections = connect(
    mapStateToProps,
    mapDispatchToProps
)(_NavigationSections);