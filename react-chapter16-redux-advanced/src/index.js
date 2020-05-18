import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk';


import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";


/**
 * Bu nasil kod ya?!? Saglam sovdum onu diyim!
 */
const logger = state => {

  return next => {
      
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store2.getState());
          return result;
      }
  }
}

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

/**
 *  Redux DevTools Extension
 *  http://extension.remotedev.io/#12-advanced-store-setup
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * burada birden fazla middleware olusturulabiliyormuş 
 * applyMiddleware(logger, logger2, vs..)
 */
const store2 = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

/**
 * witout redux devtools extension
 */
 //const store2 = createStore(rootReducer, applyMiddleware(logger));



ReactDOM.render( 
    <Provider store={store2}>
    <App />
    </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
