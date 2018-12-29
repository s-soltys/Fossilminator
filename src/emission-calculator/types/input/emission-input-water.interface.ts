import { HeatingType } from "./emission-input-types.enum";

export interface EmissionInputWater {
    bathsWeekly: number;
    showersWeekly: number;
    litresPerBath: number; // 50 small bath - 550 big jacuzzi
    waterHeatingType: HeatingType;
}