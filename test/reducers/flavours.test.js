import reducer, { defaultState, setFlavours } from 'reducers/flavours'
import { expect } from 'chai'
import { OrderedMap } from 'immutable'

import Flavour from 'records/Flavour'

describe('(Redux) flavours', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('changes the flavours to the given ones', () => {
      let flavours = [
        { id: 'abc', name_en: 'strawberry', name_el: 'φράουλα' },
        { id: 'd123', name_en: 'chocolate', name_el: 'σοκολάτα' },
        { id: 'e456', name_en: 'vanilla', name_el: 'βανίλλια' }
      ]
      let action = setFlavours(flavours)
      let nextState = reducer(undefined, action)
      expect(nextState.count()).to.equal(3)
      expect(nextState).to.equal(OrderedMap({
        'abc': new Flavour(flavours[0]),
        'd123': new Flavour(flavours[1]),
        'e456': new Flavour(flavours[2])
      }))

      flavours = [
        { id: 'f78', name_en: 'peanut', name_el: 'φυστίκι' },
        { id: 'z987', name_en: 'caramel', name_el: 'καραμέλα' }
      ]
      action = setFlavours(flavours)
      nextState = reducer(nextState, action)
      expect(nextState.count()).to.equal(2)
      expect(nextState).to.equal(OrderedMap({
        'f78': new Flavour(flavours[0]),
        'z987': new Flavour(flavours[1])
      }))
    })
  })
})
