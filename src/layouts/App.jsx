import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
cyan50, cyanA100, cyanA200, cyanA700,
pink400, pink500, pink700,
white, fullBlack
} from 'material-ui/styles/colors'

import ConnectedHeader from 'containers/ConnectedHeader'
import Hero from 'components/Hero'
import ConnectedMakeYourFroyo from 'containers/ConnectedMakeYourFroyo'
import ShopMap from 'components/ShopMap'
import Ticker from 'components/Ticker'
import Footer from 'components/Footer'
import hero from 'localization/hero'
import ticker from 'localization/ticker'

const fontFamily = '"Fira Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", "segoe ui", arial, sans-serif'
const styles = StyleSheet.create({
  sansSerif: {
    fontFamily
  },
  mainFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
  },
  hero: {
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("/yogo-frozen-store-inside.jpg")',
    backgroundSize: 'cover'
  },
  map: {
    height: '50vh'
  }
})

const muiTheme = getMuiTheme({
  fontFamily,
  palette: {
    primary1Color: pink500,
    primary2Color: pink700,
    primary3Color: pink400,
    accent1Color: cyanA200,
    accent2Color: cyanA100,
    accent3Color: cyanA700,
    alternateTextColor: cyan50,
    canvasColor: white,
    shadowColor: fullBlack
  }
})

class App extends Component {
  render () {
    let { authenticated, login, changeLanguage, locale, windowWidth } = this.props
    let mapData = {
      center: { lat: 37.975874, lng: 22.978 },
      markers: [
        { position: { lat: 37.975874, lng: 22.9772 }, icon: 'froyo@32.png' }
      ],
      zoom: 18
    }
    let heroData = hero['content_' + locale]
    let tickerData = authenticated ? ticker.authenticated['content_' + locale] : ticker.guest['content_' + locale]
    tickerData.login = authenticated ? () => console.log('awesome!') : login

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={css(styles.sansSerif, styles.mainFlexContainer)}>
          <ConnectedHeader brand={'Yogo Frozen'} changeLanguage={changeLanguage} locale={locale} windowWidth={windowWidth} />
          <section className={css(styles.hero)}>
            <Hero {...heroData} target={'pick'} />
          </section>
          <ConnectedMakeYourFroyo locale={locale} windowWidth={windowWidth} />
          <section id='location'>
            <ShopMap className={css(styles.map)} {...mapData} />
          </section>
          <section id='contests'>
            <Ticker {...tickerData} />
          </section>
          <Footer locale={locale} />
        </div>
      </MuiThemeProvider>
    )
  }
}

App.PropTypes = {
  authenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  locale: PropTypes.string,
  windowWidth: PropTypes.number.isRequired
}

App.defaultProps = {
  locale: 'el'
}

export default App
