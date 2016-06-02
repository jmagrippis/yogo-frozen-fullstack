import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return <button className={this.props.className}>{this.props.label}</button>
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired
}

Button.defaultProps = {
  label: 'CLICK!'
}

export default Button
