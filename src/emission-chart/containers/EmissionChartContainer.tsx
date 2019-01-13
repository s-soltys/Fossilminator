import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { EmissionsChart } from "../../emission-chart/components/EmissionsChart";
import { AppState } from "../../state";
import { EmissionDetails } from "../components";
import { EmissionAlertBadge } from "../../shared";
import { EmissionResult } from "../../emission-calculator";

const REF_EMISSION: EmissionResult = {
    housingConstruction: { co2Emission: 0.5 },
    housingHeating: { co2Emission: 2.0 },
    warmWater: { co2Emission: 1.0 },
    airConditioning: { co2Emission: 0.1 },
    fuelForTransport: { co2Emission: 1.0 },
    carConstuction: { co2Emission: 0.2 },
    publicTransport: { co2Emission: 1.0 },
    airTravel: { co2Emission: 6.0 },

    foodProduction: { co2Emission: 3.0 },
    consumption: { co2Emission: 1.0 },
    electricity: { co2Emission: 0.6 },
    deforestation: { co2Emission: 0.2 },
    commonServices: { co2Emission: 3.1 },

    totalAnnualEmission: { co2Emission: 10 },
}

class _EmissionChartContainer extends React.Component<any, any> {
    render() {
        const { emissionResult } = this.props;
        const refEmissions = REF_EMISSION;

        const maxEmission =
            1.2 * Math.max(refEmissions.totalAnnualEmission.co2Emission, emissionResult.totalAnnualEmission.co2Emission);

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
