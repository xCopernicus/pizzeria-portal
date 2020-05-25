import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import productReducer from './productRedux';
import orderReducer from './orderRedux';
import basketReducer from './basketRedux';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
  orders: {
    loading: {
      active: false,
      error: false,
    },
    data: [],
  },
  basket: {
    products: [],
  },
};

// define reducers
const reducers = {
  products: productReducer,
  orders: orderReducer,
  basket: basketReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
