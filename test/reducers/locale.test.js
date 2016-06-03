import reducer, { defaultState, setLocale } from 'reducers/locale'
import { expect } from 'chai'

describe('(Redux) locale', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('sets the locale to the given string', () => {
      let action = setLocale('el')
      expect(reducer(undefined, action)).to.equal('el')

      action = setLocale('fr')
      expect(reducer(undefined, action)).to.equal('fr')
    })
  })
})
