import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from 'components/Header'
import Hero from 'components/Hero'

const styles = StyleSheet.create({
  sansSerif: {
    fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", "segoe ui", arial, sans-serif;'
  },
  mainFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
  }
})

const navLinks = {
  en: [
    { label: 'Pick!', location: '#pick' },
    { label: 'About', location: '#about' },
    { label: 'Contact', location: '#contact' }
  ]
}

class App extends Component {
  render () {
    return (
      <div className={css(styles.sansSerif, styles.mainFlexContainer)}>
        <Header brand={'Yogo Frozen'} links={navLinks.en} />
        <Hero title={'Create something wonderful!'} />
        <footer>This is our footer!</footer>
      </div>
    )
  }
}

export default App
