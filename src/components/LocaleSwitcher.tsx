import {useLocale, useTranslations} from 'next-intl';
import {locales} from '../config';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const localeOptions = locales.map((cur) => ({
    value: cur,
    label: t('label'),
  }));

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
    {locales.map((cur) => (
      <option key={cur} value={cur}>
        {t('locale', {locale: cur})}
      </option>
    ))}
  </LocaleSwitcherSelect>
);
}