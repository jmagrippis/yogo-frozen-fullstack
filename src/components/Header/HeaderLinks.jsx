import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import FlatButton from 'material-ui/FlatButton'
import { darkWhite } from 'material-ui/styles/colors'

const labelStyle = {
  color: darkWhite,
  fontSize: '1.125rem',
  textTransform: 'none'
}

class HeaderLinks extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, links, locale, changeLanguage } = this.props
    let langLabel = locale === 'en' ? 'Ελληνικά' : 'English'
    return (
      <ul className={className}>
        {links.map((link, key) => (
          <li key={key}><FlatButton labelStyle={labelStyle} linkButton href={'#' + link.location} label={link.label} /></li>
        ))}
        <li key='languages'><FlatButton labelStyle={labelStyle} label={'<' + langLabel + '>'} onTouchTap={() => { changeLanguage(locale) }} /></li>
      </ul>
    )
  }
}

HeaderLinks.propTypes = {
  className: PropTypes.string,
  links: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired
}

export default HeaderLinks
