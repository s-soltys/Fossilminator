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
                                addon="units.km"
                                placeholder="transport.cityBusTravelWeeklyKmPlaceholder"
                                value={data.cityBusTravelWeeklyKm}
                                valueChange={value => update({ cityBusTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.longDistanceBusTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.longDistanceBusTravelWeeklyKmPlaceholder"
                                value={data.longDistanceBusTravelWeeklyKm}
                                valueChange={value => update({ longDistanceBusTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="transport.microBusTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.microBusTravelWeeklyKmPlaceholder"
                                value={data.microBusTravelWeeklyKm}
                                valueChange={value => update({ microBusTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.metroTramTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.metroTramTravelWeeklyKmPlaceholder"
                                value={data.metroTramTravelWeeklyKm}
                                valueChange={value => update({ metroTramTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="transport.taxiTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.taxiTravelWeeklyKmPlaceholder"
                                value={data.taxiTravelWeeklyKm}
                                valueChange={value => update({ taxiTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.suburbanTrainTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.suburbanTrainTravelWeeklyKmPlaceholder"
                                value={data.suburbanTrainTravelWeeklyKm}
                                valueChange={value => update({ suburbanTrainTravelWeeklyKm: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="transport.longDistanceTrainTravelWeeklyKmTitle"
                                addon="units.km"
                                placeholder="transport.longDistanceTrainTravelWeeklyKmPlaceholder"
                                value={data.longDistanceTrainTravelWeeklyKm}
                                valueChange={value => update({ longDistanceTrainTravelWeeklyKm: value })}>
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