import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppState, NavigationActions } from '@proj/state';

class _NavigationSections extends React.Component<any> {
    render() {
        return (
            <div>
                <h1>SECTION {this.props.section}</h1>
                <h2>SET SECTION: 'xxx'</h2>
                <h2>SET SECTION: 'yyy'</h2>
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