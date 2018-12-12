import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState, NavigationActions, Section } from '../../state';

class _NavigationSections extends React.Component<any> {
    render() {
        return (
            <div className="py-5">
                <h1>SECTION {this.props.section}</h1>
                <h2 onClick={_ => this.props.setSection(Section.Transport)}>SET SECTION: '{Section.Transport}'</h2>
                <h2 onClick={_ => this.props.setSection(Section.Welcome)}>SET SECTION: '{Section.Welcome}'</h2>
            </div>
        );
    }
}

function mapStateToProps({ navigation }: AppState) {
    return {
        section: navigation.section
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            setSection: NavigationActions.SetNavigationSection
        },
        dispatch
    );
}

export const NavigationSections = connect(
    mapStateToProps,
    mapDispatchToProps
)(_NavigationSections);