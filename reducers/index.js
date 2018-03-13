import {combineReducers} from 'redux';
import clear from './clear';
import numbers from './numbers';
import calculate from './calculate';
import operators from './operators';
import SelectionReducer from './SelectionReducer';

export default combineReducers({calculate, clear, numbers, operators, selectedId: SelectionReducer});