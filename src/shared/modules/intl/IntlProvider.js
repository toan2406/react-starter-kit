import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const mapStateToProps = ({ intl }) => ({
  locale: intl.locale,
  messages: intl.messages
});

export default connect(mapStateToProps)(IntlProvider);
