import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionsChart } from "../../emission-chart/components/EmissionsChart";
import { AppState } from "../../state";
import { EmissionDetails } from "../components";
import { EmissionAlertBadge } from "../../shared";
import { EmissionResult } from "../../emission-calculator";

const REF_EMISSION: EmissionResult = {
    housingConstruction: { emission_gCO2e: 0.5 },
    housingHeating: { emission_gCO2e: 2.0 },
    warmWater: { emission_gCO2e: 1.0 },
    airConditioning: { emission_gCO2e: 0.1 },
    fuelForTransport: { emission_gCO2e: 1.0 },
    carConstuction: { emission_gCO2e: 0.2 },
    publicTransport: { emission_gCO2e: 1.0 },
    airTravel: { emission_gCO2e: 6.0 },

    foodProduction: { emission_gCO2e: 3.0 },
    consumption: { emission_gCO2e: 1.0 },
    electricity: { emission_gCO2e: 0.6 },
    deforestation: { emission_gCO2e: 0.2 },
    commonServices: { emission_gCO2e: 3.1 },

    totalAnnualEmission: { emission_gCO2e: 10 },
}

class _EmissionChartContainer extends React.Component<any, any> {
    getMaxEmission(a: EmissionResult, b: EmissionResult) {
        const maxEmission =
            1.2 * Math.max(a.totalAnnualEmission.emission_gCO2e, b.totalAnnualEmission.emission_gCO2e);

        return maxEmission;
    }

    render() {
        const { emissionResult } = this.props;
        const refEmissions = REF_EMISSION;

        const maxEmission = this.getMaxEmission(emissionResult, refEmissions);

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
