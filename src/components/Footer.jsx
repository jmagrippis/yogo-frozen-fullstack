import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'
import { cyan500, darkWhite, lightWhite } from 'material-ui/styles/colors'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'

import footer from 'localization/footer'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cyan500,
    color: darkWhite,
    padding: '1rem 0'
  },
  link: {
    color: darkWhite,
    transition: '0.25s color ease-in',
    ':hover': {
      color: lightWhite
    }
  }
})

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, locale } = this.props
    let footerData = footer['content_' + locale]
    return (
      <footer className={className ? className + ' ' : '' + css(styles.container)}>
        <p>{footerData.madeWith} <ActionFavorite color={darkWhite} style={{ height: '1rem', width: '1rem' }} /> {footerData.in} Manchester</p>
        <p>{footerData.call} <a className={css(styles.link)} href='tel:+302744026202' alt='Call our shop!'>+30 2744 026202</a> - {footerData.findUs} <a className={css(styles.link)} href='https://www.facebook.com/YogoFrozenGR/' alt='Our Facebook page'>Facebook</a></p>
        <p>{footerData.by} <a className={css(styles.link)} href='https://magrippis.com'>Johnny {footerData.magrippis}</a></p>
      </footer>
    )
  }
}

Footer.propTypes = {
  className: PropTypes.string,
  locale: PropTypes.string.isRequired
}

export default Footer
