import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, EmissionInputActions } from '../../state';
import { EmissionFormWrapper, LabelledDropdown, LabelledInput } from '../components';
import { EmissionInputPublicTransport, PlaneClass } from '../../emission-calculator';
import { PublicTransportOptions } from '../constants';

interface Props {
    data: EmissionInputPublicTransport;
    update: typeof EmissionInputActions.UpdatePublicTransport
}

class _PrivateTransportForm extends React.Component<Props> {
    render() {
        const { data, update } = this.props;

        return (
            <EmissionFormWrapper title="privateTransport.sectionTitle">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.cityBusTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.cityBusTravelWeekly}
                                valueChange={value => update({ cityBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.longDistanceBusTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.longDistanceBusTravelWeekly}
                                valueChange={value => update({ longDistanceBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.microBusTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.microBusTravelWeekly}
                                valueChange={value => update({ microBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.metroTramTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.metroTramTravelWeekly}
                                valueChange={value => update({ metroTramTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.taxiTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.taxiTravelWeekly}
                                valueChange={value => update({ taxiTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.suburbanTrainTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.suburbanTrainTravelWeekly}
                                valueChange={value => update({ suburbanTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.longDistanceTrainTravelWeekly.title"
                                addon="units.kmWeekly"
                                value={data.longDistanceTrainTravelWeekly}
                                valueChange={value => update({ longDistanceTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                </div>
                <hr/>
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

export const PrivateTransportForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(_PrivateTransportForm);