import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

type Option = { value: any, label: string };

interface Props {
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
        const { value, valueChange, options } = this.props;

        const currentLabel = options.find(option => option.value === value);

        return (
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
        );
    }
}