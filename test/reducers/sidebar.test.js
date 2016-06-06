import reducer, { defaultState, toggleSidebar } from 'reducers/sidebar'
import { expect } from 'chai'

describe('(Redux) sidebar', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('toggles whether the sidebar is open or not', () => {
      const action = toggleSidebar()
      let nextState = reducer(undefined, action)
      expect(nextState).to.equal(true)

      nextState = reducer(nextState, action)
      expect(nextState).to.equal(false)
    })
  })
})
