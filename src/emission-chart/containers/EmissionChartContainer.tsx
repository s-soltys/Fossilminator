import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionsChart } from "../../emission-chart/components/EmissionsChart";
import { AppState } from "../../state";
import { EmissionDetails } from "../components";
import { EmissionAlertBadge } from "../../shared";

const REF_EMISSION = {
    housingConstruction: 0.5,
    housingHeating: 2.0,
    warmWater: 1.0,
    airConditioning: 0.1,
    fuelForTransport: 1.0,
    carConstuction: 0.2,
    publicTransport: 1.0,
    airTravel: 6.0,

    foodProduction: 3.0,
    consumption: 1.0,
    electricity: 0.6,
    deforestation: 0.2,
    commonServices: 3.1,

    totalAnnualEmission: 18
}

class _EmissionChartContainer extends React.Component<any, any> {
    render() {
        const { emissionResult } = this.props;
        const refEmissions = REF_EMISSION;

        const maxEmission =
            1.2 * Math.max(refEmissions.totalAnnualEmission, emissionResult.totalAnnualEmission);

        return (
            <div>
                <div className="d-flex justify-content-around" style={{ height: 300 }}>
                    <div className="pr-3">
                        <EmissionDetails emission={emissionResult} />
                    </div>
                    <EmissionsChart
                        emission={refEmissions}
                        limit={maxEmission}
                        label="Średnia"
                    />
                    <EmissionsChart
                        emission={emissionResult}
                        limit={maxEmission}
                        label="Twoja emisja"
                    />
                </div>
                <div className="mt-5">
                    <EmissionAlertBadge emission={emissionResult.totalAnnualEmission} />
                </div>
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
