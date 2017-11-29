import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const Title = () => (
  <h1>
    <FormattedMessage id="greeting" values={{ name: 'Toan' }} />
  </h1>
);

export default injectIntl(Title);
