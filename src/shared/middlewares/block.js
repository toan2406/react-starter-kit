import { initialize } from '../modules/app/actions';

export default function blockMiddleware(store) {
  return next => action => {
    const { type } = action;
    const initializeType = initialize.toString();
    const currentState = store.getState();
    const isInit = currentState.app.isInit;

    if (isInit || type === initializeType) {
      return next(action);
    }
  };
}
