import { OrderedMap } from 'immutable'

import Flavour from 'records/Flavour'
import { setFetching, setLastUpdated } from 'reducers/meta'

// Constants
export const SET_FLAVOURS = 'SET_FLAVOURS'

// Action Creators
export const fetchFlavours = (date) => {
  return (dispatch, getState) => {
    if (getState().api.meta.get('isFetching').get('flavours')) return
    dispatch(setFetching('flavours', true))
    // TODO: actually fetch from Horizon!
    let flavours = [
      { id: 'abc', name_en: 'strawberry', name_el: 'φράουλα' },
      { id: 'd123', name_en: 'chocolate', name_el: 'σοκολάτα' },
      { id: 'e456', name_en: 'vanilla', name_el: 'βανίλλια' }
    ]
    dispatch(setFetching('flavours', false))
    dispatch(setLastUpdated('flavours', typeof date !== 'undefined' ? date : new Date()))
    return dispatch(setFlavours(flavours))
  }
}

export const setFlavours = (flavours) => ({
  type: SET_FLAVOURS,
  flavours
})

// Reducer
export const defaultState = OrderedMap()

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_FLAVOURS:
      return action.flavours.reduce((r, flavour) => {
        return r.set(flavour.id, new Flavour(flavour))
      }, OrderedMap())
    default:
      return state
  }
}
