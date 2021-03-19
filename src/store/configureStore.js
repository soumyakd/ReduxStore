import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import titleReducer from '../reducers/titleReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        title: titleReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore
