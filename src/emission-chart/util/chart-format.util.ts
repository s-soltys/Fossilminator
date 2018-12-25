import { ChartField } from './chart-fields.constant';

export function chartFieldAttributes(field: ChartField) {
    const fieldName = `data-${field}`.toLowerCase();
    const attributes = { [fieldName]: true };
    return attributes;
}