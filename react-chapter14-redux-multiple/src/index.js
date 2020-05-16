import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from 'redux'
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {Provider} from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});
const store2 = createStore(rootReducer);

ReactDOM.render( 
    <Provider store={store2}>
    <App />
    </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
