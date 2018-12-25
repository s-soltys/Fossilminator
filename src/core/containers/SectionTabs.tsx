import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, NavLink } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, NavigationActions, Section } from "../../state";

const SECTION_ITEMS = [
    { section: Section.Housing, label: "xxx" },
    { section: Section.WaterAndAirConditioning, label: "yyy" }
];

export class _SectionTabs extends React.Component<any> {
    renderLink({ section, label }) {
        const { activeSection, setSection } = this.props;

        return (
            <NavItem>
                <NavLink
                    className={classnames({
                        active: section === activeSection
                    })}
                    onClick={() => {
                        setSection(section);
                    }}
                >
                    {label}
                </NavLink>
            </NavItem>
        );
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    {SECTION_ITEMS.map(item => this.renderLink(item))}
                </Nav>
            </div>
        );
    }
}

function mapStateToProps({ navigation }: AppState) {
    return {
        activeSection: navigation.section
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            setSection: NavigationActions.SetNavigationSection
        },
        dispatch
    );
}

export const SectionTabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(_SectionTabs);
