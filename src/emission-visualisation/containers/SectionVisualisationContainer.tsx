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
                    <SpritePanel file="111.jpg" alt="water and air conditioning"></SpritePanel>
                );
            case Section.PublicTransport:
                return (
                    <SpritePanel file="367.jpg" alt="public transport"></SpritePanel>
                );
            case Section.PrivateTransport:
                return (
                    <SpritePanel file="96.jpg" alt="private transport"></SpritePanel>
                );
            case Section.Food:
                return (
                    <SpritePanel file="292.jpg" alt="food"></SpritePanel>
                );
            case Section.Consumption:
                return (
                    <SpritePanel file="392.jpg" alt="consumption"></SpritePanel>
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
