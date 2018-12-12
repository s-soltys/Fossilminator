import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState, NavigationActions, Section } from '../../state';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const SECTIONS = [Section.Welcome, Section.Transport];

class _NavigationSections extends React.Component<any> {
    render() {
        const { activeSection, setSection } = this.props;
        return (
            <Nav tabs className="mt-5">
                {
                    SECTIONS.map(section => (
                        <NavItem key={section}>
                            <NavLink className={`${section === activeSection ? 'active' : ''}`} onClick={() => setSection(section)}>
                                {section}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
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