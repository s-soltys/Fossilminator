import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Translate } from 'react-i18nify';

type Option = { value: any, label: string };

interface Props {
    label?: string;
    value: any;
    valueChange: (value: any) => any;
    options: Option[];
}

export class LabelledDropdown extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = { isOpen: false };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(event: Event) {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const { label, value, valueChange, options } = this.props;

        const currentLabel = options.find(option => option.value === value);

        return (
            <div>
                { !!label ? <Translate className="font-weight-light mb-2" tag="p" value={label} /> : null }
                <Dropdown isOpen={this.state.isOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>
                        { currentLabel ? currentLabel.label : value }
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            options.map(option => (
                                <DropdownItem key={option.value} onClick={() => valueChange(option.value)}>
                                    { option.label }
                                </DropdownItem>
                            ))
                        }
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}