import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import ThemeReducer from './themeReducer';

let store = createStore(
  combineReducers({ThemeReducer}),
  applyMiddleware(thunk),
);

export default store;
