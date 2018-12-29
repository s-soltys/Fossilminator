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
            <EmissionFormWrapper title="publicTransport.sectionTitle">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.cityBusTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.cityBusTravelWeekly}
                                valueChange={value => update({ cityBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.longDistanceBusTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.longDistanceBusTravelWeekly}
                                valueChange={value => update({ longDistanceBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.microBusTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.microBusTravelWeekly}
                                valueChange={value => update({ microBusTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.metroTramTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.metroTramTravelWeekly}
                                valueChange={value => update({ metroTramTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div>
                            <LabelledInput
                                label="publicTransport.taxiTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.taxiTravelWeekly}
                                valueChange={value => update({ taxiTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.suburbanTrainTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.suburbanTrainTravelWeekly}
                                valueChange={value => update({ suburbanTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                        <div className="pt-3">
                            <LabelledInput
                                label="publicTransport.longDistanceTrainTravelWeeklyTitle"
                                addon="units.kmWeekly"
                                value={data.longDistanceTrainTravelWeekly}
                                valueChange={value => update({ longDistanceTrainTravelWeekly: value })}>
                            </LabelledInput>
                        </div>
                    </div>
                </div>
                <hr/>
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