import React from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Translate } from 'react-i18nify';

interface Props {
    label?: string;
    addon?: string;
    placeholder?: string;
    value: any;
    valueChange: (value: any) => any;
}

export class LabelledInput extends React.Component<Props> {
    render() {
        const { label, value, valueChange, addon, placeholder } = this.props;

        return (
            <div>
                <Translate className="font-weight-light mb-2" tag="p" value={label} />
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
            </div>
        );
    }
}
