import * as actionTypes from '../actions/actions';

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
    return {
      ...state,
      counter: state.counter - action.value
    };  
  }
  return state;
}

export default counterReducer;