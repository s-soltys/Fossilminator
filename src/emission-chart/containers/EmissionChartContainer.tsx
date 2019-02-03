import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionsChart } from "../../emission-chart/components/EmissionsChart";
import { AppState } from "../../state";
import { EmissionDetails } from "../components";
import { EmissionAlertBadge } from "../../shared";
import { EmissionResult } from "../../emission-calculator";
import { emissionResultValue } from "../util";

const gToTonne = 1000000;
const REF_EMISSION: EmissionResult = {
    housingConstruction: { emission_gCO2e: 0.5 * gToTonne },
    housingHeating: { emission_gCO2e: 2.0 * gToTonne },
    warmWater: { emission_gCO2e: 1.0 * gToTonne },
    airConditioning: { emission_gCO2e: 0.1 * gToTonne },
    fuelForTransport: { emission_gCO2e: 1.0 * gToTonne },
    carConstuction: { emission_gCO2e: 0.2 * gToTonne },
    publicTransport: { emission_gCO2e: 1.0 * gToTonne },
    airTravel: { emission_gCO2e: 6.0 * gToTonne },

    foodProduction: { emission_gCO2e: 3.0 * gToTonne },
    consumption: { emission_gCO2e: 1.0 * gToTonne },
    electricity: { emission_gCO2e: 0.6 * gToTonne },
    deforestation: { emission_gCO2e: 0.2 * gToTonne },
    commonServices: { emission_gCO2e: 3.1 * gToTonne },

    totalAnnualEmission: { emission_gCO2e: 10 * gToTonne },
}

class _EmissionChartContainer extends React.Component<any, any> {
    getMaxEmission(a: EmissionResult, b: EmissionResult) {
        const maxEmission =
             Math.max(emissionResultValue(a.totalAnnualEmission), emissionResultValue(b.totalAnnualEmission));

        return 1.2 * maxEmission;
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
