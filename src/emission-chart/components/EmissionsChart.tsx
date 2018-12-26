import React from "react";
import { chartFieldAttributes } from "../util";
import { EmissionResultTotalField, EmissionResultPartialFields } from "../../emission-calculator";

export class EmissionsChart extends React.Component<any> {
    renderChartSection(field) {
        const { emission, limit } = this.props;

        const heightPercentage = ((emission[field] || 0) / limit) * 100;

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

        const totalResult = emission[EmissionResultTotalField] || 0;

        return (
            <div className="d-flex flex-column justify-content-end align-items-center">
                <small className="text-center font-weight-light">{label}</small>
                <small className="font-weight-bold mb-2">
                    {totalResult.toFixed(2)} ton CO<sub>2</sub>
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
