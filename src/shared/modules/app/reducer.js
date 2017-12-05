import { handleActions } from 'redux-actions';
import { initialize } from './actions';

const INITIAL_STATE = {
  isInit: false
};

export default handleActions({
  [initialize]: () => ({
    isInit: true
  })
}, INITIAL_STATE);
