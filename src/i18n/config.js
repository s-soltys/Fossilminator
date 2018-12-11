import { I18n } from 'react-i18nify';

const en = require('./languages/en.json');
const pl = require('./languages/pl.json');

I18n.setTranslations({ en, pl });

I18n.setLocale('pl');