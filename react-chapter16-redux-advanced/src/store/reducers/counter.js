import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
  counter: 0,  
}

const counterReducer = (state = initialState, action) => {  

  if(action.type === actionTypes.INCREMENT){
    return {
      ...state,
      counter: state.counter + action.value
    };
  }else if(action.type === actionTypes.DECREMENT){
    
    return updateObject(state, {counter: state.counter - action.value});
    /*
    return {
      ...state,
      counter: state.counter - action.value
    };
    */  
  }
  return state;
}

export default counterReducer;