import { handleActions } from 'redux-actions';
import { setFirstRender } from './actions';

const INITIAL_STATE = {
  firstRender: true
};

export default handleActions({
  [setFirstRender]: (state, { payload }) => ({
    firstRender: !!payload
  })
}, INITIAL_STATE);
