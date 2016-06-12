import { Map, OrderedMap } from 'immutable'

import { addFlavour } from 'reducers/flavours'
import { addTopping } from 'reducers/toppings'
import reduce from 'lodash/reduce'

export const loadState = () => {
  if (typeof localStorage === 'undefined') return undefined
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    let state = JSON.parse(serializedState)
    return {
      locale: state.locale,
      api: {
        flavours: OrderedMap(reduce(state.api.flavours, addFlavour, OrderedMap())),
        toppings: OrderedMap(reduce(state.api.toppings, addTopping, OrderedMap())),
        meta: Map({
          isFetching: Map({
            flavours: state.api.meta.isFetching.flavours,
            toppings: state.api.meta.isFetching.toppings
          }),
          lastUpdated: Map({
            flavours: state.api.meta.lastUpdated.flavours,
            toppings: state.api.meta.lastUpdated.toppings
          })
        })
      }
    }
  } catch (err) {
    console.log('Could not retrieve from localStorage: ' + err)
    return undefined
  }
}

export const saveState = (state) => {
  if (typeof localStorage === 'undefined') return
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log('Could not save to localStorage: ' + err)
  }
}
