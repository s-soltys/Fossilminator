import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { AppState, NavigationActions, Section } from '../../state';

const SECTIONS = [Section.Welcome, Section.Transport];

class _NavigationSections extends React.Component<any> {
    render() {
        const { activeSection, setSection } = this.props;
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
                            <Input placeholder="Car travel per week" type="number" step="1" />
                        </InputGroup>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps({ navigation }: AppState) {
    return {
        activeSection: navigation.section
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            setSection: NavigationActions.SetNavigationSection
        },
        dispatch
    );
}

export const NavigationSections = connect(
    mapStateToProps,
    mapDispatchToProps
)(_NavigationSections);