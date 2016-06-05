import reducer, { defaultState, nextStep, prevStep, setFlavour, toggleTopping } from 'reducers/voting'
import { expect } from 'chai'

describe('(Redux) voting', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('moves to the next step', () => {
      const action = nextStep()
      let nextState = reducer(undefined, action)
      expect(nextState.get('activeStep')).to.equal(1)
      nextState = reducer(nextState, action)
      expect(nextState.get('activeStep')).to.equal(2)
    })
    it('does not move to a negative step', () => {
      const action = prevStep()
      expect(reducer(undefined, action).get('activeStep')).to.equal(0)
    })
    it('moves to the previous step', () => {
      const action = prevStep()
      const state = defaultState.set('activeStep', 11)
      let nextState = reducer(state, action)
      expect(nextState.get('activeStep')).to.equal(10)

      nextState = reducer(nextState, action)
      expect(nextState.get('activeStep')).to.equal(9)
    })
    it('sets the selected flavourId', () => {
      let flavourId = 'abc123'
      let action = setFlavour(flavourId)
      let nextState = reducer(undefined, action)
      expect(nextState.get('flavour')).to.equal(flavourId)

      flavourId = 'd33'
      action = setFlavour(flavourId)
      nextState = reducer(nextState, action)
      expect(nextState.get('flavour')).to.equal(flavourId)
    })
    it('adds the given toppingId to the Set, or removes it if it already exists', () => {
      let toppingId = 'abc123'
      let action = toggleTopping(toppingId)
      let nextState = reducer(undefined, action)
      expect(nextState.get('toppings').has(toppingId)).to.equal(true)

      nextState = reducer(nextState, action)
      expect(nextState.get('toppings').has(toppingId)).to.equal(false)
    })
  })
})
