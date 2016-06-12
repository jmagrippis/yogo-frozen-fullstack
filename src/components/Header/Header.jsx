import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Inbox from 'material-ui/svg-icons/content/inbox'
import { white, darkWhite } from 'material-ui/styles/colors'

import HeaderLinks from 'components/Header/HeaderLinks'
import HeaderResponsiveLinks from 'components/Header/HeaderResponsiveLinks'
import navLinks from 'localization/navLinks'
import getLocalized from 'localization/getLocalized'

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    listStyle: 'none',
    margin: '.35rem 0 0',
    padding: 0
  },
  altHoverText: {
    color: white,
    transition: '0.25s color ease-in',
    ':hover': {
      color: darkWhite
    }
  },
  brand: {
    textTransform: 'uppercase',
    textDecoration: 'none'
  }
})

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, brand, locale, changeLanguage, sidebar, toggleSidebar, windowWidth } = this.props
    let links = navLinks.map((link) => getLocalized(link, 'label', locale))
    return (
      <AppBar
        className={className}
        zDepth={3}
        title={<a href={'#'} className={css(styles.brand, styles.altHoverText)}>{brand}</a>}
        iconElementLeft={<IconButton><Inbox /></IconButton>}
        iconElementRight={windowWidth > 800 ? (
          <HeaderLinks className={css(styles.list)} links={links} locale={locale} changeLanguage={changeLanguage} />
        ) : <HeaderResponsiveLinks links={links} locale={locale} changeLanguage={changeLanguage} open={sidebar} toggleOpen={toggleSidebar} />}
      />
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  brand: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  sidebar: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired
}

export default Header
