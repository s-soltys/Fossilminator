import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown } from '../components';
import { EmissionInputFood } from '../../emission-calculator';

const averageAmountOfFoodOptions = [
    { value: 1, label: 'food.averageAmountOfFood.veryLow' },
    { value: 2, label: 'food.averageAmountOfFood.low' },
    { value: 3, label: 'food.averageAmountOfFood.medium' },
    { value: 4, label: 'food.averageAmountOfFood.high' },
    { value: 5, label: 'food.averageAmountOfFood.veryHigh' }
];

const foodSourceLocalityOptions = [
    { value: 1, label: 'food.foodSourceLocality.localDireclyFromSource' },
    { value: 2, label: 'food.foodSourceLocality.localSmallStores' },
    { value: 3, label: 'food.foodSourceLocality.localAndSeasonal' },
    { value: 4, label: 'food.foodSourceLocality.dontCare' },
    { value: 5, label: 'food.foodSourceLocality.exotic' }
];

const meatPerWeekOptions = [
    { value: 1, label: 'food.meatPerWeek.vegan' },
    { value: 2, label: 'food.meatPerWeek.vegetarian' },
    { value: 3, label: 'food.meatPerWeek.rarely' },
    { value: 4, label: 'food.meatPerWeek.oncePerWeek' },
    { value: 5, label: 'food.meatPerWeek.fewTimesPerWeek' },
    { value: 6, label: 'food.meatPerWeek.daily' } 
];

const frozenFoodWeeklyOptions = [
    { value: 1, label: 'food.frozenFoodWeekly.never' },
    { value: 2, label: 'food.frozenFoodWeekly.rarely' },
    { value: 3, label: 'food.frozenFoodWeekly.weekly' },
    { value: 4, label: 'food.frozenFoodWeekly.fewTimesPerWeek' },
    { value: 5, label: 'food.frozenFoodWeekly.daily' }
];

const refridgeratorEfficiencyOptions = [
    { value: 1, label: 'food.refridgeratorEfficiency.none' },
    { value: 2, label: 'food.refridgeratorEfficiency.low' },
    { value: 3, label: 'food.refridgeratorEfficiency.medium' },
    { value: 4, label: 'food.refridgeratorEfficiency.high' },
    { value: 5, label: 'food.refridgeratorEfficiency.veryHigh' }
];

const ovenEfficiencyOptions = [
    { value: 1, label: 'food.ovenEfficiency.normalElectric' },
    { value: 2, label: 'food.ovenEfficiency.induction' },
    { value: 3, label: 'food.ovenEfficiency.gas' },
    { value: 4, label: 'food.ovenEfficiency.coal' },
    { value: 5, label: 'food.ovenEfficiency.wood' }
];

interface Props {
    data: EmissionInputFood;
    update: typeof EmissionInputActions.UpdateFood
}

class _FoodForm extends React.Component<Props> {
    render() {
        const { data, update } = this.props;

        return (
            <EmissionFormWrapper title="food.sectionTitle">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <LabelledDropdown
                                label="food.averageAmountOfFood.title"
                                value={data.averageAmountOfFood}
                                valueChange={value => update({ averageAmountOfFood: value })}
                                options={averageAmountOfFoodOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.foodSourceLocality.title"
                                value={data.foodSourceLocality}
                                valueChange={value => update({ foodSourceLocality: value })}
                                options={foodSourceLocalityOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.meatPerWeek.title"
                                value={data.meatPerWeek}
                                valueChange={value => update({ meatPerWeek: value })}
                                options={meatPerWeekOptions}>
                            </LabelledDropdown>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <LabelledDropdown
                                label="food.frozenFoodWeekly.title"
                                value={data.frozenFoodWeekly}
                                valueChange={value => update({ frozenFoodWeekly: value })}
                                options={frozenFoodWeeklyOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.refridgeratorEfficiency.title"
                                value={data.refridgeratorEfficiency}
                                valueChange={value => update({ refridgeratorEfficiency: value })}
                                options={refridgeratorEfficiencyOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.ovenEfficiency.title"
                                value={data.ovenEfficiency}
                                valueChange={value => update({ ovenEfficiency: value })}
                                options={ovenEfficiencyOptions}>
                            </LabelledDropdown>
                        </div>
                    </div>
                </div>
            </EmissionFormWrapper>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        data: emissionInput.food
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            update: EmissionInputActions.UpdateFood
        },
        dispatch
    );
}

export const FoodForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(_FoodForm);