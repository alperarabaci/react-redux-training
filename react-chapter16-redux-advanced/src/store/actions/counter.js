import * as types from './actionTypes';
/**
 * Niye return icinde?
 * Endirekt calismasi istendigi icin.
 */
export const increment = (value) => {
    return {
        type: types.INCREMENT, value:value
    }
}

export const decrement = (value) => {
    return {
        type: types.DECREMENT, value: value
    }
}

