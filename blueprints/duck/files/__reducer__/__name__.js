import { Map } from 'immutable'

// Constants
export const ACTION_NAME = 'ACTION_NAME'

// Action Creators
export const setActionName = (action) => ({
  type: ACTION_NAME,
  action
})

// Reducer
export const defaultState = Map({
})

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
