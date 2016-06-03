import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import ConnectedApp from 'containers/ConnectedApp'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  }
}

Root.propTypes = { store: PropTypes.object }
