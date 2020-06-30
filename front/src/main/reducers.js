import { combineReducers } from 'redux'
import NumbersReduce from '../numbers/numbersReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    numbersReduce: NumbersReduce,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer