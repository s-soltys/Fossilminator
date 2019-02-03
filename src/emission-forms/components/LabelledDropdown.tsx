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
        const { t, value, options } = this.props;

        const currentOption = options.find(option => option.value === value);

        const currentLabel = currentOption && t(currentOption.label);

        return currentLabel || value || DEFAULT_PLACEHOLDER;
    }

    render() {
        const { t, label, valueChange, options } = this.props;

        return (
            <div>
                {this.renderLabel()}
                <Dropdown size="sm" isOpen={this.state.isOpen} toggle={this.toggleDropdown}>
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

    renderLabel() {
        if (!this.props.label) return null;

        return <Translate className="font-weight-light mb-2" tag="p" value={this.props.label} />;
    }
}

export const LabelledDropdown = withTranslate(_LabelledDropdown);