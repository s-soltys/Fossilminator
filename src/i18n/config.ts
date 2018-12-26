import { I18n } from 'react-i18nify';
import { Subject } from './util/subject';

class LocaleConfigClass {
    private localeSubject = new Subject<string>();

    configure(locale: string) {
        const en = require('./languages/en.json');
        const pl = require('./languages/pl.json');
    
        I18n.setTranslations({ en, pl });
    
        I18n.setLocale(locale);
    }

    changeLocale(locale: string) {
        I18n.setLocale(locale);
        this.localeSubject.next(locale);
    }

    subscribeToChangeLocale(handler: (locale: string) => void): Function {
        return this.localeSubject.subscribe(handler);
    }
};

export const LocaleConfig = new LocaleConfigClass();