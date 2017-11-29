import { switchLocale } from './actions';
import intlReducer from './reducer';
import IntlProvider from './IntlProvider';
import './locale-data/en.json';
import './locale-data/vi.json';

export { switchLocale, intlReducer, IntlProvider };
