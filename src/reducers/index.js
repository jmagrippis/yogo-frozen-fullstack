import { combineReducers } from 'redux'

import locale from 'reducers/locale'
import voting from 'reducers/voting'
import flavours from 'reducers/flavours'
import toppings from 'reducers/toppings'
import meta from 'reducers/meta'

const rootReducer = combineReducers({
  locale,
  voting,
  api: combineReducers({
    flavours,
    toppings,
    meta
  })
})

export default rootReducer
