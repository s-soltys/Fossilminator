export interface EmissionInputWater {
    bathsWeekly: number;
    showersWeekly: number;
    litresPerBath: number; // 50 small bath - 550 big jacuzzi
    waterHeatingType: HeatingType;
}

export enum HeatingType {
    Central,
    HeatingOil,
    Gas,
    Coal,
    CoalModern,
    Electric,
    Biomas
}