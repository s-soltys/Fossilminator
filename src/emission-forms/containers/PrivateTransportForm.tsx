import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EmissionInputPrivateTransport, EmissionInputPrivateVehicle } from '../../emission-calculator';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledInput } from '../components';

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
                <div className="col-12 col-md-6 col-lg-4">
                    <div>
                        <LabelledInput
                            label="privateTransport.vehicleType.title"
                            addon="units.kmWeekly"
                            value={data.type}
                            valueChange={value => update(i, { type: value })}>
                        </LabelledInput>
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