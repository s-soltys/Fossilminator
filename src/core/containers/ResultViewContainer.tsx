import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionChartContainer } from "../../emission-chart";
import { AppState } from "../../state";
import { SectionVisualisationContainer } from "../../emission-visualisation";
import { CountrySelector } from "../../emission-forms";
//import { UnitSelector } from "../../emission-forms";

class _ResultViewContainer extends React.Component<any, any> {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="m-4">
                        <EmissionChartContainer />
                    </div>
                    {/* <hr />
                    <EmissionAlertBadge /> */}
                </div>
                <div className="col-12 col-md-6">
                    <div className="mb-3">
                        <CountrySelector />
                    </div>
                    <SectionVisualisationContainer />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export const ResultViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ResultViewContainer);
