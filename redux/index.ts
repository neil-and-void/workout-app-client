// /** configure redux store */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

import reducers from './reducers';
import thunk from 'redux-thunk';

const makeStore = (context) =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore, { debug: true });
