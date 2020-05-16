import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from 'redux'
import reducer from './store/reducer';
import {Provider} from 'react-redux';

import registerServiceWorker from "./registerServiceWorker";


const store2 = createStore(reducer);

ReactDOM.render( 
    <Provider store={store2}>
    <App />
    </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
