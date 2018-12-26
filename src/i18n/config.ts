import { I18n } from 'react-i18nify';

class LocaleConfigClass {
    private handlers: Function[] = [];

    configure(locale: string) {
        const en = require('./languages/en.json');
        const pl = require('./languages/pl.json');
    
        I18n.setTranslations({ en, pl });
    
        I18n.setLocale(locale);
    }

    changeLocale(locale: string) {
        I18n.setLocale(locale);
        this.handlers.forEach(handler => handler(locale));
    }

    subscribeToChangeLocale(handler: Function): Function {
        this.handlers = [...this.handlers, handler];

        return () => {
            this.handlers = this.handlers.filter(h => h !== handler);
        };
    }
};

export const LocaleConfig = new LocaleConfigClass();