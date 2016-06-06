// Constants
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

// Action Creators
export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR
})

// Reducer
export const defaultState = false

export default function (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state
    default:
      return state
  }
}
