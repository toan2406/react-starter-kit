import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  locale: 'en',
  messages: {}
};

export default handleActions({
  '@@intl/SWITCH_LOCALE': (state, { payload }) => ({
    locale: payload.locale,
    messages: payload.messages
  })
}, INITIAL_STATE);
