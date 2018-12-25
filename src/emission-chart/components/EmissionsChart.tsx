import React from "react";
import { TOTAL_FIELD, CHART_FIELDS, chartFieldAttributes } from "../util";

export class EmissionsChart extends React.Component<any> {
    renderChartSection(field) {
        const { emission, limit } = this.props;

        const attributes = chartFieldAttributes(field);

        const heightPercentage = ((emission[field] || 0) / limit) * 100;

        return (
            <div
                className="chart-segment w-50"
                style={{ height: `${heightPercentage}%`, width: "100%" }}
                {...attributes}
            />
        );
    }

    render() {
        const { emission, label } = this.props;

        const totalResult = emission[TOTAL_FIELD] || 0;

        return (
            <div className="d-flex flex-column justify-content-end align-items-center">
                <small className="text-center font-weight-light">{label}</small>
                <small className="font-weight-bold mb-2">
                    {totalResult.toFixed(2)} ton CO<sub>2</sub>
                </small>
                {CHART_FIELDS.map(field => (
                    <React.Fragment key={field}>
                        {this.renderChartSection(field)}
                    </React.Fragment>
                ))}
            </div>
        );
    }
}
