const initialState = {  
  results: []
}

const resultReducer = (state = initialState, action) => {  

    if(action.type === 'STORE_RESULT'){

    return {
      ...state,
      results: state.results.concat({id: new Date(), value: action.result})
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

export default resultReducer;