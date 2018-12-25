import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionsChart } from "../../emission-chart/components/EmissionsChart";
import { AppState } from "../../state";
import { EmissionDetails } from "../components";

class _EmissionChartContainer extends React.Component<any, any> {
    render() {
        const { emissionResult } = this.props;
        const refEmissions = { food: 6, transport: 19, result: 25 };
        const maxEmission =
            1.2 * Math.max(refEmissions.result, emissionResult.result);

        return (
            <div className="d-flex justify-content-around">
                <EmissionDetails />
                <EmissionsChart
                    emission={emissionResult}
                    limit={maxEmission}
                    label="Twoja emisja"
                />
                <EmissionsChart
                    emission={refEmissions}
                    limit={maxEmission}
                    label="Średnia"
                />
            </div>
        );
    }
}

function mapStateToProps({ emissionResult }: AppState) {
    return {
        emissionResult: emissionResult
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export const EmissionChartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_EmissionChartContainer);
