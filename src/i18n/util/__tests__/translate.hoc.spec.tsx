import { mount } from 'enzyme';
import React from 'react';
import { I18n } from 'react-i18nify';
import { LocaleConfig } from '../../config';
import { withTranslate } from '../translate.hoc';

describe('Translate HOC should', () => {
    const _TestComponent = ({ t }: any) => <div className='content'>{t('test')}</div>;
    const TestComponent = withTranslate(_TestComponent);

    beforeEach(() => {
        I18n.setTranslations({
            en: { test: 'TEST IN EN' },
            pl: { test: 'TEST IN PL!!!' }
        });
        I18n.setLocale('en');
    });

    it('re-render when translation has changed', () => {
        const wrapper = mount(<TestComponent />);

        expect(wrapper.find('.content').text()).toEqual('TEST IN EN');

        LocaleConfig.changeLocale('pl');

        expect(wrapper.find('.content').text()).toEqual('TEST IN PL!!!');
    });
});
