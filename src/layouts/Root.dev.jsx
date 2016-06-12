import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import ConnectedApp from 'containers/ConnectedApp'
import DevTools from 'layouts/DevTools'

export default class Root extends Component {
  render () {
    const { store, authenticated, login } = this.props
    return (
      <Provider store={store}>
        <div>
          <ConnectedApp authenticated={authenticated} login={login} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  authenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
}
