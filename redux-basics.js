/**
 * node redux-basics.js 
 */
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0   
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }else if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState()); 

// Subsciption
store.subscribe( () => {
    console.log('[Subcription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type: 'ADD_COUNTER', value: 2});
console.log(store.getState());

// Subsciption
/*
store.subscire( () => {
    console.log('[Subcription]', store.getState());
});
*/