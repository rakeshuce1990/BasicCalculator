import initialState from '../store/initialState';
import { ADD, CALCULATE, CLEAR, CLEAR_ALL, CLEAR_DATA, DIVIDE, MULTIPLY, SELECT_NUMBER, SELECT_OPERATOR, SUBTRACT } from '../constants';

// Reducers

export default (state = initialState, action)=>{

    const regex_numbers = /[0-9]/;
    const regex_operators = /[*+/\-]/;

    var stored_expression = state.expression;
    
    switch(action.type){

        case CLEAR_DATA:{

            switch(action.payload){

                case CLEAR:{

                    stored_expression = stored_expression.slice(0, -1);
                    return Object.assign({},state , {"expression":stored_expression});

                }
                case CLEAR_ALL:{

                    return Object.assign({},state , {"expression":""});
                }
            }
        }
        case SELECT_NUMBER:{

            return Object.assign({},state , {"expression": stored_expression + action.payload});
        }
        case SELECT_OPERATOR:{

            if(regex_operators.test(stored_expression.slice(-1))){

                return Object.assign({},state , {"expression":stored_expression});

            }else if(regex_operators.test(stored_expression)){

                var val = 0;
                var exp = stored_expression.split(regex_operators);
                switch(state.operator){

                    case ADD:{
                        val = Number(exp[0]) + Number(exp[1]);
                        break;
                    }
                    case SUBTRACT:{
                        val = exp[0] - exp[1];
                        break;
                    }
                    case MULTIPLY:{
                        val = exp[0] * exp[1];
                        break;
                    }
                    case DIVIDE:{
                        val = exp[0] / exp[1];
                        break;
                    }
                }

                return Object.assign({}, state, {"result":val}, {"expression":val + action.payload}, {"operator":action.operation});

            }else if(!regex_numbers.test(stored_expression)){

                return Object.assign({},state , {"expression":stored_expression});

            }else{

                return Object.assign({},state , {"expression":stored_expression + action.payload}, {"operator":action.operation});
            }
            
        }
        case CALCULATE:{

            if(regex_operators.test(stored_expression.slice(-1))){

                return Object.assign({}, state, {"result":"NaE"});

            }else if(regex_operators.test(stored_expression)){

                var val = 0;
                var exp = stored_expression.split(regex_operators);
                switch(state.operator){

                    case ADD:{
                        val = Number(exp[0]) + Number(exp[1]);
                        break;
                    }
                    case SUBTRACT:{
                        val = exp[0] - exp[1];
                        break;
                    }
                    case MULTIPLY:{
                        val = exp[0] * exp[1];
                        break;
                    }
                    case DIVIDE:{
                        val = exp[0] / exp[1];
                        break;
                    }
                }

                return Object.assign({}, state, {"result":val}, {"expression":stored_expression}, {"operator":action.operation});

            }else if(regex_numbers.test(stored_expression)){

                return Object.assign({}, state, {"result":stored_expression}, {"expression":stored_expression});

            }
           
        }
        default:
            return state;
    }
};
