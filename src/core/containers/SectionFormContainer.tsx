import React from "react";
import { connect } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";

export class _SectionFormContainer extends React.Component<any> {
    render() {
        const { section } = this.props;

        return (
            <TabContent activeTab={section}>
                <TabPane tabId={Section.Housing}>
                    <h1>Housing</h1>
                </TabPane>
                <TabPane tabId={Section.WaterAndAirConditioning}>
                    <h1>WaterAndAirConditioning</h1>
                </TabPane>
                <TabPane tabId={Section.PrivateTransport}>
                    <h1>PrivateTransport</h1>
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
