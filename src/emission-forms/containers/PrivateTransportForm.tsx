import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EmissionInputPrivateTransport, EmissionInputPrivateVehicle } from '../../emission-calculator';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown } from '../components';
import { vehicleTypeOptions, vehicleFuelTypeOptions } from '../constants/options-private-transport';

interface Props {
    data: EmissionInputPrivateTransport;
    update: typeof EmissionInputActions.UpdatePrivateTransportVehicle
}

class _PrivateTransportForm extends React.Component<Props> {
    render() {
        const { data } = this.props;

        return (
            <EmissionFormWrapper title="privateTransport.sectionTitle">
                {
                    data.vehicles.map((vehicle, index) => (
                        <React.Fragment key={index}>
                            {this.renderVehicleForm(vehicle, index)}
                            <hr />
                        </React.Fragment>
                    ))
                }
            </EmissionFormWrapper>
        );
    }

    renderVehicleForm(data: EmissionInputPrivateVehicle, i: number) {
        const { update } = this.props;

        return (
            <div className="row">
                <div className="col-12 col-md-6 col-lg-2">
                    <div>
                        <LabelledDropdown
                            label="privateTransport.vehicleType.title"
                            value={data.type}
                            valueChange={value => update(i, { type: value })}
                            options={vehicleTypeOptions}>
                        </LabelledDropdown>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-1">
                    <div>
                        <LabelledDropdown
                            label="privateTransport.vehicleAge.title"
                            value={data.age}
                            valueChange={value => update(i, { age: value })}
                            options={[]}>
                        </LabelledDropdown>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-1">
                    <div>
                        <LabelledDropdown
                            label="privateTransport.fuelType.title"
                            value={data.fuelType}
                            valueChange={value => update(i, { fuelType: value })}
                            options={vehicleFuelTypeOptions}>
                        </LabelledDropdown>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        data: emissionInput.privateTransport
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            update: EmissionInputActions.UpdatePrivateTransportVehicle
        },
        dispatch
    );
}

export const PrivateTransportForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(_PrivateTransportForm);