import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown, LabelledInput } from '../components';
import { EmissionInputPublicTransport } from '../../emission-calculator';

interface Props {
    data: EmissionInputPublicTransport;
    update: typeof EmissionInputActions.UpdatePublicTransport
}

class _PublicTransportForm extends React.Component<Props> {
    render() {
        const { data, update } = this.props;

        return (
            <EmissionFormWrapper title="Housing">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="transport.cityBusTravelWeeklyKmTitle"
                                addon="units.hours"
                                placeholder="transport.cityBusTravelWeeklyKmPlaceholder"
                                value={data.cityBusTravelWeeklyKm}
                                valueChange={value => update({ cityBusTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    </div>
                    <div className="col-12 col-md-6">
                    </div>
                </div>
            </EmissionFormWrapper>
        );
    }
}

function mapStateToProps({ emissionInput }: AppState) {
    return {
        data: emissionInput.publicTransport
    };
};

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators(
        {
            update: EmissionInputActions.UpdatePublicTransport
        },
        dispatch
    );
}

export const PublicTransportForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(_PublicTransportForm);