import { getLocaleMessages } from './api';

const switchLocale = ({ locale, messageUrl }) => dispatch =>
  getLocaleMessages(messageUrl).then(messages =>
    dispatch({
      type: '@@intl/SWITCH_LOCALE',
      payload: {
        locale,
        messages
      }
    })
  );

export { switchLocale };
