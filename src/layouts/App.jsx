import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
cyan50, cyanA100, cyanA200, cyanA700,
pink400, pink500, pink700,
white, fullBlack
} from 'material-ui/styles/colors'

import Header from 'components/Header'
import Hero from 'components/Hero'
import ConnectedMakeYourFroyo from 'containers/ConnectedMakeYourFroyo'
import ShopMap from 'components/ShopMap'

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
    let { changeLanguage, locale } = this.props
    let mapData = {
      center: { lat: 37.975874, lng: 22.978 },
      markers: [
        { position: { lat: 37.975874, lng: 22.9772 }, icon: 'froyo.png' }
      ],
      zoom: 18
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={css(styles.sansSerif, styles.mainFlexContainer)}>
          <Header brand={'Yogo Frozen'} changeLanguage={changeLanguage} locale={locale} />
          <Hero title={'Create something wonderful!'} />
          <ConnectedMakeYourFroyo locale={locale} />
          <ShopMap className={css(styles.map)} {...mapData} />
          <footer>This is our footer!</footer>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.PropTypes = {
  changeLanguage: PropTypes.func.isRequired,
  locale: PropTypes.string
}

App.defaultProps = {
  locale: 'el'
}

export default App
