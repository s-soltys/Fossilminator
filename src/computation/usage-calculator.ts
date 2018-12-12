interface UsageParams {
    data: any[];
}

interface UsageResult {
    result: number;
}

export function calculateUsage(input: UsageParams): UsageResult {
    return {
        result: input.data.length
    };
};