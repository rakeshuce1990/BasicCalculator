import { CALCULATE, CLEAR_DATA, SELECT_NUMBER, SELECT_OPERATOR } from '../constants';

// Actions

export const selectButton = (val) => {
    return {
        type:SELECT_NUMBER,
        payload:val
    };
};
export const selectOperator = (val, type) =>{
    return {
        type:SELECT_OPERATOR,
        payload:val,
        operation: type
    };
} ;

export const clearData = (id) => {
    return {
        type:CLEAR_DATA,
        payload:id
    };
};

export const Calculate = () => {
    return {
        type:CALCULATE,
    };
};