import { combineReducers } from 'redux'

import flavours from 'reducers/flavours'
import toppings from 'reducers/toppings'
import meta from 'reducers/meta'

export const isFetching = (state) => (
  state.meta.get('isFetching').some((v) => v)
)

export const isStale = (state, key, date) => {
  return !state.meta.get('lastUpdated').has(key) ||
  state.meta.get('lastUpdated').get(key) === undefined ||
  state.meta.get('lastUpdated').get(key) < new Date((typeof date !== 'undefined' ? date : new Date()) - 864e+5)
}

const api = combineReducers({
  flavours,
  toppings,
  meta
})

export default api
