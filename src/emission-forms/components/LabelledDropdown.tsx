import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Translate } from 'react-i18nify';
import { withTranslate, InjectedTranslateProps } from '../../i18n';

const DEFAULT_PLACEHOLDER = '—';

type Option = { value: any, label: string };

interface Props extends InjectedTranslateProps {
    label?: string;
    value: any;
    valueChange: (value: any) => any;
    options: Option[];
}

export class _LabelledDropdown extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = { isOpen: false };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(event: Event) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    getCurrentLabel() {
        const { t, label, value, valueChange, options } = this.props;

        const currentLabel = options.find(option => option.value === value);

        if (currentLabel) {
            return t(currentLabel.label);
        }
        
        return value || DEFAULT_PLACEHOLDER;
    }

    render() {
        const { t, label, valueChange, options } = this.props;

        return (
            <div>
                { !!label ? <Translate className="font-weight-light mb-2" tag="p" value={label} /> : null }
                <Dropdown isOpen={this.state.isOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>{this.getCurrentLabel()} </DropdownToggle>
                    <DropdownMenu>
                        {
                            options.map(option => (
                                <DropdownItem key={option.value} onClick={() => valueChange(option.value)}>
                                    {t(option.label)}
                                </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export const LabelledDropdown = withTranslate(_LabelledDropdown);