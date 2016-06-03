import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import throttle from 'lodash/throttle'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'normalize.css'

import configureStore from 'store/configureStore'
import Root from 'layouts/Root'
import { loadState, saveState } from 'utilities/localStorage'
import 'styles/main.css'

injectTapEventPlugin()

const store = configureStore(loadState())
store.subscribe(throttle(() => {
  saveState({
    locale: store.getState().locale
  })
}, 1000))

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
