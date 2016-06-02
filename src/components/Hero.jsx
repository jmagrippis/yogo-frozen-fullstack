import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Button from 'components/Button'

class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return <div className={this.props.className}>
      <h2>{this.props.title}</h2>
      <Button label={'Take Action!'} />
    </div>
  }
}

Hero.propTypes = {
  title: PropTypes.string.isRequired
}

export default Hero
