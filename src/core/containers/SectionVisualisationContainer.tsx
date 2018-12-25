import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";

export class _SectionVisualisationContainer extends React.Component<any> {
    render() {
        const { section } = this.props;

        switch (section) {
            case Section.Housing:
                return <img className="w-100" src="images/ui/314.jpg" alt="housing" />;
            case Section.WaterAndAirConditioning:
                return <img className="w-100" src="images/ui/111.jpg" alt="water and air conditioning" />;
            case Section.PublicTransport:
                return <img className="w-100" src="images/ui/367.jpg" alt="public transport" />;
            case Section.PrivateTransport:
                return <img className="w-100" src="images/ui/96.jpg" alt="private transport" />;
            case Section.Food:
                return <img className="w-100" src="images/ui/292.jpg" alt="food" />;
            case Section.Consumption:
                return <img className="w-100" src="images/ui/392.jpg" alt="consumption" />;
            default:
                return null;
        }
    }
}

function mapStateToProps({ navigation }: AppState) {
    return {
        section: navigation.section
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export const SectionVisualisationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_SectionVisualisationContainer);
