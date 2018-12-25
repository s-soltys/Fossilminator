import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionChartContainer } from "../../emission-chart";
import { EmissionAlertBadge } from "../../shared/components/EmissionAlertBadge";
import { AppState } from "../../state";

class _ResultViewContainer extends React.Component<any, any> {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="m-4">
                        <EmissionChartContainer />
                    </div>
                    <hr />
                    <EmissionAlertBadge />
                </div>
                <div className="col-12 col-md-6">
                    <h2>IMAGE</h2>
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
