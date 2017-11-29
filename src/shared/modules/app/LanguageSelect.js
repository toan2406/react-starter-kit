import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { FormattedMessage, injectIntl } from 'react-intl';
import { switchLocale } from '../intl';

const LanguageSelect = ({ onItemClick }) => (
  <ul>
    <li onClick={onItemClick.bind(null, 'en')}>
      <FormattedMessage id="english" />
    </li>
    <li onClick={onItemClick.bind(null, 'vi')}>
      <FormattedMessage id="vietnamese" />
    </li>
  </ul>
);

const mapDispatchToProps = {
  switchLocale
};

const enhance = compose(
  injectIntl,
  connect(null, mapDispatchToProps),
  withHandlers({
    onItemClick: props => locale => {
      const messageUrl = `/${locale}.json`;
      props.switchLocale({ locale, messageUrl });
    }
  })
);

export default enhance(LanguageSelect);
