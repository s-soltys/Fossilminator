import classnames from "classnames";
import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, NavLink } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, NavigationActions, Section } from "../../state";
import { Translate } from 'react-i18nify';

const SECTION_ITEMS = [
    { section: Section.Housing, label: "section.housing" },
    {
        section: Section.WaterAndAirConditioning,
        label: "section.waterAndAirConditioning"
    },
    { section: Section.PrivateTransport, label: "section.privateTransport" },
    { section: Section.PublicTransport, label: "section.publicTransport" },
    { section: Section.Food, label: "section.food" },
    { section: Section.Consumption, label: "section.consumption" },
    { section: Section.EmissionResults, label: "section.emissionResults" }
];

export class _SectionTabs extends React.Component<any> {
    renderLink({ section, label }) {
        const { activeSection, setSection } = this.props;

        return (
            <NavLink
                className={classnames({
                    active: section === activeSection
                })}
                onClick={() => {
                    setSection(section);
                }}
            >
                <Translate value={label} />
            </NavLink>
        );
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    {SECTION_ITEMS.map(item => (
                        <NavItem key={item.section}>{this.renderLink(item)}</NavItem>
                    ))}
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
