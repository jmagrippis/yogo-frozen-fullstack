import { combineReducers } from 'redux'

import locale from 'reducers/locale'
import voting from 'reducers/voting'

const rootReducer = combineReducers({
  locale,
  voting
})

export default rootReducer
