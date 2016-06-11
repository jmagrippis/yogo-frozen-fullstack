import { OrderedMap } from 'immutable'

import Topping from 'records/Topping'
import { setFetching, setLastUpdated } from 'reducers/meta'

// Constants
export const SET_TOPPINGS = 'SET_TOPPINGS'

// Action Creators
export const fetchToppings = (db, date) => {
  return (dispatch, getState) => {
    if (getState().api.meta.get('isFetching').get('toppings')) return
    dispatch(setFetching('toppings', true))
    db('toppings').order('ordering').fetch().subscribe(
      (toppings) => {
        dispatch(setFetching('toppings', false))
        dispatch(setLastUpdated('toppings', typeof date !== 'undefined' ? date : new Date()))
        return dispatch(setToppings(toppings))
      },
      (err) => {
        dispatch(setFetching('toppings', false))
        console.error(err)
      }
    )
  }
}

export const setToppings = (toppings) => ({
  type: SET_TOPPINGS,
  toppings
})

// Reducer
export const defaultState = OrderedMap()

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_TOPPINGS:
      return action.toppings.reduce((r, topping) => {
        return r.set(topping.id, new Topping(topping))
      }, OrderedMap())
    default:
      return state
  }
}
