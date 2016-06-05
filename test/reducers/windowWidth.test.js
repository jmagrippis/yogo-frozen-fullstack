import reducer, { defaultState, setWindowWidth } from 'reducers/windowWidth'
import { expect } from 'chai'

describe('(Redux) windowWidth', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('sets the window width', () => {
      let action = setWindowWidth(460)
      let nextState = reducer(undefined, action)
      expect(nextState).to.equal(460)

      action = setWindowWidth(1920)
      nextState = reducer(nextState, action)
      expect(nextState).to.equal(1920)
    })
  })
})
