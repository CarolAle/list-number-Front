import { combineReducers } from 'redux'
import NumbersReduce from '../numbers/numbersReducer'

const rootReducer = combineReducers({
    numbersReduce: NumbersReduce
})

export default rootReducer