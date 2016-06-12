import { OrderedMap } from 'immutable'

import Flavour from 'records/Flavour'
import { setFetching, setLastUpdated } from 'reducers/meta'

// Constants
export const SET_FLAVOURS = 'SET_FLAVOURS'

// Action Creators
export const fetchFlavours = (db, date) => {
  return (dispatch, getState) => {
    if (getState().api.meta.get('isFetching').get('flavours')) return
    dispatch(setFetching('flavours', true))
    db('flavours').order('ordering').fetch().subscribe(
      (flavours) => {
        dispatch(setFetching('flavours', false))
        dispatch(setLastUpdated('flavours', typeof date !== 'undefined' ? date : new Date()))
        return dispatch(setFlavours(flavours))
      },
      (err) => {
        dispatch(setFetching('flavours', false))
        console.error(err)
      }
    )
  }
}

export const setFlavours = (flavours) => ({
  type: SET_FLAVOURS,
  flavours
})

// Helper Methods
export const addFlavour = (flavours, flavour) => flavours.set(flavour.id, new Flavour(flavour))

// Reducer
export const defaultState = OrderedMap()

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_FLAVOURS:
      return action.flavours.reduce(addFlavour, OrderedMap())
    default:
      return state
  }
}
