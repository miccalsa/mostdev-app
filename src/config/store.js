import { createStore, applyMiddleware } from 'redux';
import { Map as map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const store = createStore(
  rootReducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
