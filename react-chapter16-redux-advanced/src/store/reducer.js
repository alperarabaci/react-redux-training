/*
//(Eski reducer, ayristirmadan once)

import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {  
  //bunlar switch'mis gibi dusun:
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
  }else if(action.type === 'STORE_RESULT'){

    return {
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter})
    };
  }else if(action.type === 'DELETE_RESULT'){
    const copyResults =  [...state.results];
    copyResults.splice(action.index, 1);
    return {
      ...state,
      results: copyResults
    };
  }
  return state;
}

export default reducer;

*/