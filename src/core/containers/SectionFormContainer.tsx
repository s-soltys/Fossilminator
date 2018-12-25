import React from "react";
import { connect } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { EmissionCalculator } from "../../emission-forms";

export class _SectionFormContainer extends React.Component<any> {
    render() {
        const { section } = this.props;

        return (
            <TabContent activeTab={section}>
                <TabPane tabId={Section.Housing}>
                    <EmissionCalculator />
                </TabPane>
                <TabPane tabId={Section.WaterAndAirConditioning}>
                    <EmissionCalculator />
                </TabPane>
                <TabPane tabId={Section.PrivateTransport}>
                    <EmissionCalculator />
                </TabPane>
            </TabContent>
        );
    }
}

function mapStateToProps({ navigation }: AppState) {
    return {
        section: navigation.section
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export const SectionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_SectionFormContainer);
