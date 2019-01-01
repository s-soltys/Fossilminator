import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown } from '../components';
import { EmissionInputFood } from '../../emission-calculator';
import { FoodOptions } from '../constants';

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
                                options={FoodOptions.averageAmountOfFoodOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.foodSourceLocality.title"
                                value={data.foodSourceLocality}
                                valueChange={value => update({ foodSourceLocality: value })}
                                options={FoodOptions.foodSourceLocalityOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.meatPerWeek.title"
                                value={data.meatPerWeek}
                                valueChange={value => update({ meatPerWeek: value })}
                                options={FoodOptions.meatPerWeekOptions}>
                            </LabelledDropdown>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <LabelledDropdown
                                label="food.frozenFoodWeekly.title"
                                value={data.frozenFoodWeekly}
                                valueChange={value => update({ frozenFoodWeekly: value })}
                                options={FoodOptions.frozenFoodWeeklyOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.refridgeratorEfficiency.title"
                                value={data.refridgeratorEfficiency}
                                valueChange={value => update({ refridgeratorEfficiency: value })}
                                options={FoodOptions.refridgeratorEfficiencyOptions}>
                            </LabelledDropdown>
                        </div>
                        <div className="pt-3">
                            <LabelledDropdown
                                label="food.ovenEfficiency.title"
                                value={data.ovenEfficiency}
                                valueChange={value => update({ ovenEfficiency: value })}
                                options={FoodOptions.ovenEfficiencyOptions}>
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