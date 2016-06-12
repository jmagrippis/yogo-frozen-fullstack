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
import { isFetching, isStale } from 'reducers/api'
import { fetchFlavours } from 'reducers/flavours'
import { fetchToppings } from 'reducers/toppings'
import { setWindowWidth } from 'reducers/windowWidth'
import 'styles/main.css'

injectTapEventPlugin()

const store = configureStore(loadState())
store.subscribe(throttle(() => {
  saveState({
    locale: store.getState().locale,
    api: isFetching(store.getState().api) ? undefined : store.getState().api
  })
}, 1000))

// Fetch the collections
const horizon = Horizon({ host: 'localhost:8181' })
horizon.onReady(() => {
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
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    const NextRoot = require('layouts/Root').default
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
    document.getElementById('app')
    )
  })
}
