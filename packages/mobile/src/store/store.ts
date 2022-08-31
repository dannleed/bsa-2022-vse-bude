import { configureStore } from '@reduxjs/toolkit';
import { storage, authApi } from '~/services/services';
import { rootReducer } from './root-reducer';
import { errorHandler } from './middlewares/middlewares';

const extraArgument = {
  storage,
  authApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(errorHandler);

    if (__DEV__) {
      // eslint-disable-next-line
      const createDebugger = require('redux-flipper').default;
      defaultMiddleware.concat(createDebugger());
    }

    return defaultMiddleware;
  },
});

export { extraArgument, store };
