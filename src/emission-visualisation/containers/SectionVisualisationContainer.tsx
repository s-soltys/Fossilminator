import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState, Section } from "../../state";
import { SpritePanel, Sprite } from "../components";
import { EmissionInput } from "../../emission-calculator";

interface Props {
    section: Section;
    emissionInput: EmissionInput;
}

export class _SectionVisualisationContainer extends React.Component<Props> {
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
        return (
            <SpritePanel file="367.jpg" alt="public transport">
                <Sprite visible={true} file="381.png" alt="car" size="35" right="10" bottom="5" />
            </SpritePanel>
        );
    }

    renderFood() {
        const { averageAmountOfFood } = this.props.emissionInput.food;

        return (
            <SpritePanel file="292.jpg" alt="food">
                <Sprite visible={averageAmountOfFood < 3} file="419.png" alt="food" size="15" left="45" bottom="10" />
                <Sprite visible={averageAmountOfFood >= 3} file="129.png" alt="food" size="15" left="45" bottom="10" />
            </SpritePanel>
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
