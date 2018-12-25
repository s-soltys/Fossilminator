import React from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

interface Props {
    addon?: string;
    placeholder?: string;
    value: any;
    valueChange: (value: any) => any;
}

export class LabelledInput extends React.Component<Props> {
    render() {
        const { value, valueChange, addon, placeholder } = this.props;

        return (
            <InputGroup>
                {addon ? (
                    <InputGroupAddon addonType="prepend">
                        {addon}
                    </InputGroupAddon>
                ) : null}
                <Input
                    placeholder={placeholder}
                    type="number"
                    value={value || ''}
                    onChange={event => valueChange(event.currentTarget.value)}
                />
            </InputGroup>
        );
    }
}
