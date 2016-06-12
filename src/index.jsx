import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import throttle from 'lodash/throttle'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Horizon from '@horizon/client'
import 'normalize.css'

import configureStore from 'store/configureStore'
import Root from 'layouts/Root'
import { loadState, saveState } from 'utilities/localStorage'
import { login } from 'utilities/auth'
import { isFetching, isStale } from 'reducers/api'
import { fetchFlavours } from 'reducers/flavours'
import { fetchToppings } from 'reducers/toppings'
import { setWindowWidth } from 'reducers/windowWidth'
import 'styles/main.css'

injectTapEventPlugin()

const store = configureStore(loadState())
// Cache some of our app's state
store.subscribe(throttle(() => {
  saveState({
    locale: store.getState().locale,
    api: isFetching(store.getState().api) ? undefined : store.getState().api
  })
}, 1000))

// Horizon connection
const horizon = Horizon({ host: 'localhost:8181' })

horizon.onReady(() => {
  // Fetch the Collections
  if (store.getState().api.flavours.count() < 1 || isStale(store.getState().api, 'flavours')) {
    store.dispatch(fetchFlavours(horizon))
  }
  if (store.getState().api.flavours.count() < 1 || isStale(store.getState().api, 'toppings')) {
    store.dispatch(fetchToppings(horizon))
  }
})
horizon.connect()

// Sets the window width and watches for changes
store.dispatch(setWindowWidth(window.innerWidth))
window.addEventListener('resize', throttle(() => {
  store.dispatch(setWindowWidth(window.innerWidth))
}))

render(
  <AppContainer>
    <Root store={store} authenticated={horizon.hasAuthToken()} login={() => login(horizon, 'facebook')} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    const NextRoot = require('layouts/Root').default
    render(
      <AppContainer>
        <NextRoot store={store} authenticated={horizon.hasAuthToken()} login={() => login(horizon, 'facebook')} />
      </AppContainer>,
    document.getElementById('app')
    )
  })
}
