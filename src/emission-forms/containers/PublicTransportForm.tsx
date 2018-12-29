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
                                label="transport.cityBusTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.cityBusTravelWeeklyPlaceholder"
                                value={data.cityBusTravelWeekly}
                                valueChange={value => update({ cityBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.longDistanceBusTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.longDistanceBusTravelWeeklyPlaceholder"
                                value={data.longDistanceBusTravelWeekly}
                                valueChange={value => update({ longDistanceBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="transport.microBusTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.microBusTravelWeeklyPlaceholder"
                                value={data.microBusTravelWeekly}
                                valueChange={value => update({ microBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.metroTramTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.metroTramTravelWeeklyPlaceholder"
                                value={data.metroTramTravelWeekly}
                                valueChange={value => update({ metroTramTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="transport.taxiTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.taxiTravelWeeklyPlaceholder"
                                value={data.taxiTravelWeekly}
                                valueChange={value => update({ taxiTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.suburbanTrainTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.suburbanTrainTravelWeeklyPlaceholder"
                                value={data.suburbanTrainTravelWeekly}
                                valueChange={value => update({ suburbanTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.longDistanceTrainTravelWeeklyTitle"
                                addon="units.km"
                                placeholder="transport.longDistanceTrainTravelWeeklyPlaceholder"
                                value={data.longDistanceTrainTravelWeekly}
                                valueChange={value => update({ longDistanceTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
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