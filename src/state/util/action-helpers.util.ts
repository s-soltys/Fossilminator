export interface TypedAction<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export function createAction<T extends string, P>(type: T, payload?: P): TypedAction<T, P> {
    return { type, payload };
}