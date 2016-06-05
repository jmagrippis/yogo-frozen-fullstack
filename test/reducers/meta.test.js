import reducer, { defaultState, setFetching, setLastUpdated } from 'reducers/meta'
import { expect } from 'chai'
import { Map } from 'immutable'

describe('(Redux) meta', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('sets fetching to true and false', () => {
      let action = setFetching('flavours', true)
      let nextState = reducer(undefined, action)
      expect(nextState.get('isFetching')).to.equal(Map({
        flavours: true,
        toppings: false
      }))

      action = setFetching('flavours', false)
      nextState = reducer(nextState, action)
      expect(nextState.get('isFetching')).to.equal(Map({
        flavours: false,
        toppings: false
      }))

      action = setFetching('toppings', false)
      nextState = reducer(nextState, action)
      expect(nextState.get('isFetching')).to.equal(Map({
        flavours: false,
        toppings: false
      }))
    })
    it('sets the last updated time', () => {
      const currentDate = new Date()
      let action = setLastUpdated('flavours', currentDate)
      let nextState = reducer(undefined, action)
      expect(nextState.get('lastUpdated')).to.equal(Map({
        flavours: currentDate,
        toppings: undefined
      }))

      action = setLastUpdated('toppings', currentDate)
      nextState = reducer(nextState, action)
      expect(nextState.get('lastUpdated')).to.equal(Map({
        flavours: currentDate,
        toppings: currentDate
      }))

      const birthDate = new Date('1985/10/20')
      action = setLastUpdated('flavours', birthDate)
      nextState = reducer(nextState, action)
      expect(nextState.get('lastUpdated')).to.equal(Map({
        flavours: birthDate,
        toppings: currentDate
      }))
    })
  })
})
