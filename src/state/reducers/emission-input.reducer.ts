import { EmissionInputActions } from '../actions';
import { InitialAppState, EmissionInputState } from '../constants';
import { EmptyEmissionInputVehicle } from '../../emission-calculator/constants';

export const emissionInputReducer = (state: EmissionInputState = InitialAppState.emissionInput, action: EmissionInputActions.ActionsTypes): EmissionInputState => {
    switch (action.type) {
        case EmissionInputActions.SetCountryCodeType: {
            return { ...state, country: { ...state.country, countryCode: action.payload } };
        }
        case EmissionInputActions.SetEnergeticMixType: {
            return { ...state, country: { ...state.country, energeticMix: action.payload } };
        }
        case EmissionInputActions.UpdatePublicTransportType: {
            return { ...state, publicTransport: { ...state.publicTransport, ...action.payload } };
        }
        case EmissionInputActions.UpdateFoodType: {
            return { ...state, food: { ...state.food, ...action.payload } };
        }
        case EmissionInputActions.UpdatePrivateTransportVehicleType: {
            const { index, vehicle } = action.payload;

            const newVehicle = { ...state.privateTransport.vehicles[index], ...vehicle };

            const vehicles = [...state.privateTransport.vehicles];
            vehicles[index] = newVehicle;

            return { ...state, privateTransport: { vehicles } };
        }
        case EmissionInputActions.AddPrivateTransportVehicleType: {
            const vehicles = [...state.privateTransport.vehicles, { ...EmptyEmissionInputVehicle }];
            return { ...state, privateTransport: { vehicles } };
        }
        case EmissionInputActions.RemovePrivateTransportVehicleType: {
            const vehicles = state.privateTransport.vehicles.filter((_, index) => index !== action.payload.index);
            return { ...state, privateTransport: { vehicles } };
        }
        default: {
            return state;
        }
    }
};