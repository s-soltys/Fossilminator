export class Subject<P> {
    private handlers: ((p: P) => void)[] = [];

    next(param: P) {
        this.handlers.forEach(handler => handler(param));
    }

    subscribe(handler: (p: P) => void): Function {
        this.handlers = [...this.handlers, handler];
        return () => {
            this.handlers = this.handlers.filter(h => h !== handler);
        };
    }
}
