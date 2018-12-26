interface Handler<P> {
    (p: P): void;
}

export class Subject<P> {
    private handlers: Handler<P>[] = [];

    next(param: P) {
        this.handlers.forEach(handler => handler(param));
    }

    subscribe(handler: Handler<P>): Function {
        this.handlers = [...this.handlers, handler];
        return () => {
            this.handlers = this.handlers.filter(h => h !== handler);
        };
    }
}
