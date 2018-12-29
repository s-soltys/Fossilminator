import React from "react";
import { connect } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { PublicTransportForm } from "../../emission-forms/containers/PublicTransportForm";

export class _SectionFormContainer extends React.Component<any> {
    render() {
        const { section } = this.props;

        return (
            <TabContent activeTab={section}>
                <TabPane tabId={Section.Housing}>
                    { section === Section.Housing ? <PublicTransportForm /> : null }
                </TabPane>
                <TabPane tabId={Section.WaterAndAirConditioning}>
                    { section === Section.WaterAndAirConditioning ? <PublicTransportForm /> : null }
                </TabPane>
                <TabPane tabId={Section.PrivateTransport}>
                    { section === Section.PrivateTransport ? <PublicTransportForm /> : null }
                </TabPane>
                <TabPane tabId={Section.PublicTransport}>
                    { section === Section.PublicTransport ? <PublicTransportForm /> : null }
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
