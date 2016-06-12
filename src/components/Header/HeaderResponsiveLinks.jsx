import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { white } from 'material-ui/styles/colors'

class HeaderResponsiveLinks extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, locale, links, open, toggleOpen, changeLanguage } = this.props
    let langLabel = locale === 'en' ? 'Ελληνικά' : 'English'
    let scroll = (location) => {
      let el = document.getElementById(location)
      if (!el) return
      el.scrollIntoView()
    }
    return (
      <div className={className}>
        <IconButton onTouchTap={toggleOpen}><NavigationMenu color={white} /></IconButton>
        <Drawer
          docked={false}
          width={200}
          open={open}
          onRequestChange={toggleOpen}
          openSecondary
        >
          {links.map((link, key) => (
            <MenuItem key={key} onTouchTap={() => { scroll(link.location) }}>{link.label}</MenuItem>
          ))}
          <MenuItem key='language' onTouchTap={() => changeLanguage(locale)}>{'<' + langLabel + '>'}</MenuItem>
        </Drawer>
      </div>
    )
  }
}

HeaderResponsiveLinks.propTypes = {
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired
}

export default HeaderResponsiveLinks
