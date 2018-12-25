import React from "react";

const FIELDS = [
    "housingConstruction",
    "housingHeating",
    "warmWater",
    "airConditioning",
    "fuelForTransport",
    "carConstuction",
    "publicTransport",
    "airTravel",
    "foodProduction",
    "consumption",
    "electricity",
    "deforestation",
    "commonServices"
];

const TOTAL_FIELD = "totalAnnualEmission";

export class EmissionsChart extends React.Component<any> {
    renderChartSection(field) {
        const { emission, limit } = this.props;

        const fieldName = `data-${field}`.toLowerCase();
        const attributes = { [fieldName]: true };

        const heightPercentage = ((emission[field] || 0) / limit) * 100;

        return (
            <div
                className="chart-segment"
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
                <small className="font-weight-bold">
                    {totalResult.toFixed(2)} ton CO<sub>2</sub>
                </small>
                {FIELDS.map(field => (
                    <React.Fragment key={field}>
                        {this.renderChartSection(field)}
                    </React.Fragment>
                ))}
            </div>
        );
    }
}
