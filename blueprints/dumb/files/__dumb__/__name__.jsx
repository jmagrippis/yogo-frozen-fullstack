import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class <%= pascalEntityName %> extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    { className, title }
    return <div className={className}>{title}</div>
  }
}

<%= pascalEntityName %>.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default <%= pascalEntityName %>
