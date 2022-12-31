
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restaurantListReducer} from './Reducers/restaurantReducer'

//to generate middleware

const reducers=combineReducers({
restaurantReducer:restaurantListReducer
})

const middleware=[thunk]
const store=createStore(reducers,applyMiddleware(...middleware))

export default store