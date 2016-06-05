import { Map, Set } from 'immutable'

// Constants
export const NEXT_STEP = 'NEXT_STEP'
export const PREV_STEP = 'PREV_STEP'
export const SET_FLAVOUR = 'SET_FLAVOUR'
export const TOGGLE_TOPPING = 'TOGGLE_TOPPING'

// Action Creators
export const nextStep = () => ({
  type: NEXT_STEP
})

export const prevStep = () => ({
  type: PREV_STEP
})

export const setFlavour = (flavourId) => ({
  type: SET_FLAVOUR,
  flavourId
})

export const toggleTopping = (toppingId) => ({
  type: TOGGLE_TOPPING,
  toppingId
})

// Reducer
export const defaultState = Map({
  activeStep: 0,
  flavour: undefined,
  toppings: Set()
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case NEXT_STEP:
      return state.set('activeStep', state.get('activeStep') + 1)
    case PREV_STEP:
      if (state.get('activeStep') < 1) return state
      return state.set('activeStep', state.get('activeStep') - 1)
    case SET_FLAVOUR:
      return state.set('flavour', action.flavourId)
    case TOGGLE_TOPPING:
      if (state.get('toppings').has(action.toppingId)) {
        return state.set('toppings', state.get('toppings').delete(action.toppingId))
      }
      return state.set('toppings', state.get('toppings').add(action.toppingId))
    default:
      return state
  }
}
