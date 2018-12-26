import React from "react";
import { Translate } from "react-i18nify";
import { chartFieldAttributes } from "../util";
import { EmissionResultFields, EmissionResultTotalField } from "../../emission-calculator";

export class EmissionDetails extends React.Component<any> {
    renderDetailBadge(field) {
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
                    {...chartFieldAttributes(field)}
                >
                    {value.toFixed(2)}
                </small>
            </>
        );
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-start align-items-end">
                {EmissionResultFields.map(field => (
                    <div key={field}>{this.renderDetailBadge(field)}</div>
                ))}
                <div className="pt-2">
                    {this.renderDetailBadge(EmissionResultTotalField)}
                </div>
            </div>
        );
    }
}
