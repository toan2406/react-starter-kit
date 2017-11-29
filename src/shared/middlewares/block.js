import { setFirstRender } from '../modules/app/actions';

export default function blockMiddleware(store) {
  return next => action => {
    const { type } = action;
    const setFirstRenderType = setFirstRender.toString();
    const currentState = store.getState();
    const firstRender = currentState.app.firstRender;

    if (!firstRender || type === setFirstRenderType) {
      return next(action);
    }
  };
}
