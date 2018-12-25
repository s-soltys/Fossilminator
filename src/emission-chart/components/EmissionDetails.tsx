import React from "react";
import { Translate } from "react-i18nify";
import { TOTAL_FIELD, CHART_FIELDS, chartFieldAttributes } from "../util";

export class EmissionDetails extends React.Component<any> {
    renderDetailBadge(field) {
        const attributes = chartFieldAttributes(field);

        const value = this.props.emission[field] || 0;

        return (
            <>
                <small className="pr-2">
                    <Translate value={`emissionChart.${field}`} />
                </small>
                <small
                    className="d-inline-block text-center"
                    style={{
                        color: "#000",
                        minWidth: "2.5rem",
                        borderRadius: "0.1rem"
                    }}
                    {...attributes}
                >
                    {value.toFixed(2)}
                </small>
            </>
        );
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-start align-items-end">
                {CHART_FIELDS.map(field => (
                    <div key={field}>{this.renderDetailBadge(field)}</div>
                ))}
                <div className="pt-2">{this.renderDetailBadge(TOTAL_FIELD)}</div>
            </div>
        );
    }
}
