import { Subject } from '../subject';

describe('Subject should', () => {
    it('handle subscriptions', () => {
        const subSpy = jasmine.createSpy('sub');

        const subject = new Subject<string>();

        subject.next('before-subscription');

        const unusbscribe = subject.subscribe(subSpy);

        subject.next('A');
        subject.next('B');

        unusbscribe();

        subject.next('after-subscription');

        expect(subSpy).toHaveBeenCalledTimes(2);
        expect(subSpy).toHaveBeenNthCalledWith(1, 'A');
        expect(subSpy).toHaveBeenNthCalledWith(2, 'B');
    });
});
