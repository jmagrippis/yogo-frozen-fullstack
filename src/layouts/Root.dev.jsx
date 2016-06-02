import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import App from 'layouts/App'
import DevTools from 'layouts/DevTools'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = { store: PropTypes.object.isRequired }
