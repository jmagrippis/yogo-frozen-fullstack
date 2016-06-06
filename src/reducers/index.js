import { combineReducers } from 'redux'

import locale from 'reducers/locale'
import voting from 'reducers/voting'
import flavours from 'reducers/flavours'
import toppings from 'reducers/toppings'
import meta from 'reducers/meta'
import sidebar from 'reducers/sidebar'
import windowWidth from 'reducers/windowWidth'

const rootReducer = combineReducers({
  locale,
  voting,
  api: combineReducers({
    flavours,
    toppings,
    meta
  }),
  sidebar,
  windowWidth
})

export default rootReducer
