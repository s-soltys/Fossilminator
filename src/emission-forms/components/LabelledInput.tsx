import React from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Translate } from 'react-i18nify';
import { InjectedTranslateProps, withTranslate } from "../../i18n";

interface Props extends InjectedTranslateProps {
    label?: string;
    addon?: string;
    placeholder?: string;
    value: any;
    valueChange: (value: any) => any;
    className?: string;
}

export class _LabelledInput extends React.Component<Props> {
    render() {
        const { t, label, value, valueChange, addon, placeholder } = this.props;

        return (
            <div className={this.props.className}>
                <Translate className="font-weight-light mb-2" tag="p" value={label} />
                <InputGroup size="sm">
                    <Input
                        placeholder={placeholder && t(placeholder)}
                        type="number"
                        value={value || ''}
                        onChange={event => valueChange(event.currentTarget.value)}
                        />
                    {this.renderAddon()}
                </InputGroup>
            </div>
        );
    }

    renderAddon() {
        const { t, addon } = this.props;

        return addon ? (
            <InputGroupAddon addonType="append">
                {t(addon)}
            </InputGroupAddon>
        ) : null
    }

}

export const LabelledInput = withTranslate(_LabelledInput);
