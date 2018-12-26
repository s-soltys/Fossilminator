import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { SpritePanel, Sprite } from "../components";

export class _SectionVisualisationContainer extends React.Component<any> {
    render() {
        const { section } = this.props;

        switch (section) {
            case Section.Housing:
                return (
                    <SpritePanel file="314.jpg" alt="housing">
                        <Sprite file="48.png" alt="person" size="5" left="20" bottom="5" />
                        <Sprite file="152.png" alt="person" size="11" right="10" bottom="5" />
                    </SpritePanel>
                );
            case Section.WaterAndAirConditioning:
                return (
                    <img className="w-100" src="images/ui/111.jpg" alt="water and air conditioning" />
                );
            case Section.PublicTransport:
                return (
                    <img className="w-100" src="images/ui/367.jpg" alt="public transport" />
                );
            case Section.PrivateTransport:
                return (
                    <img className="w-100" src="images/ui/96.jpg" alt="private transport" />
                );
            case Section.Food:
                return (
                    <img className="w-100" src="images/ui/292.jpg" alt="food" />
                );
            case Section.Consumption:
                return (
                    <img className="w-100" src="images/ui/392.jpg" alt="consumption" />
                );
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
