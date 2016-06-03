// Constants
export const SET_LOCALE = 'SET_LOCALE'

// Action Creators
export const setLocale = (locale) => ({
  type: SET_LOCALE,
  locale
})

// Reducer
export const defaultState = 'en'

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return action.locale
    default:
      return state
  }
}
