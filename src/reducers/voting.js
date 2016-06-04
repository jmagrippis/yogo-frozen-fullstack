import { Map, Set } from 'immutable'

// Constants
export const NEXT_STEP = 'NEXT_STEP'
export const PREV_STEP = 'PREV_STEP'
export const SET_FLAVOUR = 'SET_FLAVOUR'
export const ADD_TOPPING = 'ADD_TOPPING'

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

export const addTopping = (toppingId) => ({
  type: ADD_TOPPING,
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
    case ADD_TOPPING:
      return state.set('toppings', state.get('toppings').add(action.toppingId))
    default:
      return state
  }
}
