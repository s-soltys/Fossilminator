import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { SpritePanel, Sprite } from "../components";

export class _SectionVisualisationContainer extends React.Component<any> {
    renderHousing() {
        return (
            <SpritePanel file="314.jpg" alt="housing">
                <Sprite file="48.png" alt="person" size="5" left="20" bottom="5" />
                <Sprite file="152.png" alt="person" size="11" right="10" bottom="5" />
            </SpritePanel>
        );
    }

    renderWaterAndAirConditioning() {
        return (
            <SpritePanel file="111.jpg" alt="water and air conditioning"></SpritePanel>
        );
    }

    renderPublicTransport() {
        return (
            <SpritePanel file="96.jpg" alt="private transport"></SpritePanel>
        );
    }

    renderPrivateTransport() {
        const { transport } = this.props.emissionInput;

        return (
            <SpritePanel file="367.jpg" alt="public transport">
                <Sprite visible={transport.carKmPerWeek > 0} file="381.png" alt="car" size="35" right="10" bottom="5" />
            </SpritePanel>
        );
    }

    renderFood() {
        return (
            <SpritePanel file="292.jpg" alt="food"></SpritePanel>
        );
    }

    renderConsumption() {
        return (
            <SpritePanel file="392.jpg" alt="consumption"></SpritePanel>
        );
    }

    render() {
        switch (this.props.section) {
            case Section.Housing:
                return this.renderHousing();
            case Section.WaterAndAirConditioning:
                return this.renderWaterAndAirConditioning();
            case Section.PublicTransport:
                return this.renderPublicTransport();
            case Section.PrivateTransport:
                return this.renderPrivateTransport();
            case Section.Food:
                return this.renderFood();
            case Section.Consumption:
                return this.renderConsumption();
            default:
                return null;
        }
    }
}

function mapStateToProps({ navigation, emissionInput }: AppState) {
    return {
        section: navigation.section,
        emissionInput: emissionInput
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export const SectionVisualisationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(_SectionVisualisationContainer);
