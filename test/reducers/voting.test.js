import reducer, { defaultState, nextStep, prevStep, setFlavour, addTopping } from 'reducers/voting'
import { expect } from 'chai'
import { Set } from 'immutable'

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
    it('adds the given toppingId to the Set', () => {
      let toppingId = 'abc123'
      let action = addTopping(toppingId)
      let nextState = reducer(undefined, action)
      expect(nextState.get('toppings').has(toppingId)).to.equal(true)

      toppingId = 'd33'
      action = addTopping(toppingId)
      nextState = reducer(nextState, action)
      expect(nextState.get('toppings').has(toppingId)).to.equal(true)
    })
    it('does not add the same toppingId multiple times', () => {
      const state = defaultState.set('toppings', Set(['abc123']))
      let toppingId = 'abc123'
      let action = addTopping(toppingId)
      let nextState = reducer(state, action)
      expect(nextState.get('toppings').count()).to.equal(1)

      nextState = reducer(nextState, action)
      expect(nextState.get('toppings').count()).to.equal(1)
    })
  })
})
