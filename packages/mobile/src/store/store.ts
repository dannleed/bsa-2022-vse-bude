import { configureStore } from '@reduxjs/toolkit';
import { storage, authApi, personalInfoApi } from '~/services/services';
import { rootReducer } from './root-reducer';

const extraArgument = {
  storage,
  authApi,
  personalInfoApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    });

    if (__DEV__) {
      // eslint-disable-next-line
      const createDebugger = require('redux-flipper').default;
      defaultMiddleware.concat(createDebugger());
    }

    return defaultMiddleware;
  },
});

export { extraArgument, store };
