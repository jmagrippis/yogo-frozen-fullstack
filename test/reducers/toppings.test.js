import reducer, { defaultState, setToppings } from 'reducers/toppings'
import { expect } from 'chai'
import { OrderedMap } from 'immutable'

import Topping from 'records/Topping'

describe('(Redux) toppings', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('changes the toppings to the given ones', () => {
      let toppings = [
        { id: 'c123', name_en: 'cherries', name_el: 'κεράσια' },
        { id: 'cd555', name_en: 'dark chocolate', name_el: 'μαύρη σοκολάτα' },
        { id: 'sc678', name_en: 'sour cherries', name_el: 'βύσσινα' }
      ]
      let action = setToppings(toppings)
      let nextState = reducer(undefined, action)
      expect(nextState.count()).to.equal(3)
      expect(nextState).to.equal(OrderedMap({
        'c123': new Topping(toppings[0]),
        'cd555': new Topping(toppings[1]),
        'sc678': new Topping(toppings[2])
      }))

      toppings = [
        { id: 'p78', name_en: 'peanuts', name_el: 'φυστίκια' },
        { id: 'k987', name_en: 'kiwi', name_el: 'kiwi' }
      ]
      action = setToppings(toppings)
      nextState = reducer(nextState, action)
      expect(nextState.count()).to.equal(2)
      expect(nextState).to.equal(OrderedMap({
        'p78': new Topping(toppings[0]),
        'k987': new Topping(toppings[1])
      }))
    })
  })
})
