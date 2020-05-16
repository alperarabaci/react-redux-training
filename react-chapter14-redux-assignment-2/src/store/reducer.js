const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
    console.log(action);
    if(action.type === 'ADD'){
        const addedList = state.persons.concat(action.person);
        return { 
            ...state,
            persons: addedList
        }
    }else if(action.type === 'DELETE'){
        const deletedList = state.persons.filter(person => person.id !== action.id);
        return { 
            ...state,
             persons: deletedList
        }
    }
    return state;
};

export default reducer;
