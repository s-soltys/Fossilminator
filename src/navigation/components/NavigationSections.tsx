import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, NavigationActions, Section, FossilUsageActions } from '../../state';

const SECTIONS = [Section.Welcome, Section.Transport];

class _NavigationSections extends React.Component<any> {
    render() {
        const { activeSection, setSection, transport, patchTransportUsage } = this.props;
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
                                value={transport.carKmPerWeek} onChange={event => patchTransportUsage({ carKmPerWeek: event.currentTarget.value })}/>
                        </InputGroup>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps({ navigation, fossilUsage }: AppState) {
    return {
        activeSection: navigation.section,
        transport: fossilUsage.transport
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