import React from "react";
import { connect } from "react-redux";
import { TabContent, TabPane } from "reactstrap";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { PublicTransportForm } from "../../emission-forms/containers/PublicTransportForm";

export class _SectionFormContainer extends React.Component<any> {
    renderTab(section, Component?) {
        if (!Component) {
            return (
                <TabPane tabId={section}>
                    <h1>Sekcja w budowie...</h1>
                </TabPane>
            )
        };

        return (
            <TabPane tabId={section}>
                { this.props.section === section ? <Component /> : null }
            </TabPane>
        );
    }

    render() {
        const { section } = this.props;

        return (
            <TabContent activeTab={section}>
                {this.renderTab(Section.Housing)}
                {this.renderTab(Section.WaterAndAirConditioning)}
                {this.renderTab(Section.PrivateTransport)}
                {this.renderTab(Section.PublicTransport, PublicTransportForm)}
                {this.renderTab(Section.Food)}
                {this.renderTab(Section.Consumption)}
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
