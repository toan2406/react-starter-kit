import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import styles from './title.scss';

const Title = () => (
  <h1 className={styles.title}>
    <FormattedMessage id="title" />
  </h1>
);

export default injectIntl(Title);
