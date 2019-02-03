import React from "react";
import { chartFieldAttributes, emissionResultValue } from "../util";
import { EmissionResultTotalField, EmissionResultPartialFields, EmissionResult } from "../../emission-calculator";
import { EmissionResultLabel } from "./EmissionResultLabel";

interface Props {
    label: string;
    limit: number;
    emission: EmissionResult,
}

export class EmissionsChart extends React.Component<Props> {
    renderChartSection(field) {
        const { emission, limit } = this.props;

        const units = emission[field];

        const heightPercentage = (emissionResultValue(units) / limit) * 100;

        return (
            <div
                className="chart-segment w-50"
                style={{ height: `${heightPercentage}%`, width: "100%" }}
                {...chartFieldAttributes(field)}
            />
        );
    }

    render() {
        const { emission, label } = this.props;

        return (
            <div className="d-flex flex-column justify-content-end align-items-center">
                <small className="text-center font-weight-light">{label}</small>
                <small className="font-weight-bold mb-2">
                    <EmissionResultLabel emission={emission[EmissionResultTotalField]} />
                </small>
                {EmissionResultPartialFields.map(field => (
                    <React.Fragment key={field}>
                        {this.renderChartSection(field)}
                    </React.Fragment>
                ))}
            </div>
        );
    }
}
