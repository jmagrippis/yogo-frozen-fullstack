import { Map } from 'immutable'

// Constants
export const SET_FETCHING = 'SET_FETCHING'
export const SET_LAST_UPDATED = 'SET_LAST_UPDATED'

// Action Creators
export const setFetching = (key, isFetching) => ({
  type: SET_FETCHING,
  key,
  isFetching
})

export const setLastUpdated = (key, date) => ({
  type: SET_LAST_UPDATED,
  key,
  date
})

// Reducer
export const defaultState = Map({
  isFetching: Map({
    flavours: false,
    toppings: false
  }),
  lastUpdated: Map({
    flavours: undefined,
    toppings: undefined
  })
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_FETCHING:
      return state.set('isFetching', state.get('isFetching').set(action.key, action.isFetching))
    case SET_LAST_UPDATED:
      return state.set('lastUpdated', state.get('lastUpdated').set(action.key, action.date))
    default:
      return state
  }
}
