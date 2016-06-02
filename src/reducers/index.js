import { combineReducers } from 'redux'

const defaultState = {}

const sampleReducer = (state = defaultState, action) => {
  return state
}

const rootReducer = combineReducers({
  sampleReducer
})

export default rootReducer
