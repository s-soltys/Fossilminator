import { I18n } from 'react-i18nify';

export function configureI18n(language: string) {
    const en = require('./languages/en.json');
    const pl = require('./languages/pl.json');
    
    I18n.setTranslations({ en, pl });
    
    I18n.setLocale(language);
}