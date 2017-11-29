import setStatic from 'recompose/setStatic';
import { switchLocale } from '../modules/intl';

export default function setDefaultLocale(locale) {
  let messageUrl;

  if (__SERVER__) messageUrl = `http://localhost:${process.env.PORT}/${locale}.json`;
  if (__CLIENT__) messageUrl = `/${locale}.json`;
  return setStatic('needs', [switchLocale.bind(null, { locale, messageUrl })]);
}
