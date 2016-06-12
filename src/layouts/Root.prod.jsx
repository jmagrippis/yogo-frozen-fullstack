import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import ConnectedApp from 'containers/ConnectedApp'

export default class Root extends Component {
  render () {
    const { store, authenticated, login } = this.props
    return (
      <Provider store={store} authenticated={authenticated} login={login}>
        <ConnectedApp />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  authenticated: PropTypes.bool,
  login: PropTypes.func.isRequired
}
