// Constants
export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH'

// Action Creators
export const setWindowWidth = (width) => ({
  type: SET_WINDOW_WIDTH,
  width
})

// Reducer
export const defaultState = 1280

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_WINDOW_WIDTH:
      return action.width
    default:
      return state
  }
}
