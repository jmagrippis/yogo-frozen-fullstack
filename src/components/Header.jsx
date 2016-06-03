import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'

import colours from 'configs/colours'
import shadows from 'configs/shadows'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colours.primary,
    padding: '1rem',
    fontSize: '1.25rem',
    boxShadow: shadows.z2
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  listItem: {
    padding: '0 .5rem',
    textDecoration: 'none'
  },
  whiteText: {
    color: colours.white,
    transition: '0.25s color ease-in',
    ':hover': {
      color: colours.primaryLight
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
    let { className, brand, links } = this.props
    return (
      <header className={css(styles.container) + (className ? ' ' + className : '')}>
        <a className={css(styles.whiteText, styles.brand)} href='/'>{brand}</a>
        <ul className={css(styles.list)}>
          {links.map((link, key) => (
            <li key={key}><a className={css(styles.listItem, styles.whiteText)} href={link.location}>{link.label}</a></li>
          ))}
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  className: PropTypes.string,
  brand: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Header
