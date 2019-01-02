import { EmissionInput } from "./types/input";
import { EmissionResult } from "./types/result";
import { calculateEmissionResultsWithPartials, PartialEmissionResult } from "./calculator";

export function calculateEmissionResults(input: EmissionInput): EmissionResult {
    return calculateEmissionResultsWithPartials(input, PartialEmissionResult);
}