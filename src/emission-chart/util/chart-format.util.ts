import { EmissionResultField } from "../../emission-calculator";

export function chartFieldAttributes(field: EmissionResultField) {
    const fieldName = `data-${field}`.toLowerCase();
    const attributes = { [fieldName]: true };
    return attributes;
}