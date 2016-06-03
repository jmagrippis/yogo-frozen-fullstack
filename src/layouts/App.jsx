import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from 'components/Header'
import Hero from 'components/Hero'
import getLocalized from 'localization/getLocalized'
import navLinks from 'localization/navLinks'

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

class App extends Component {
  render () {
    let { links } = {
      links: navLinks.map((link) => getLocalized(link, 'label', 'en'))
    }

    return (
      <div className={css(styles.sansSerif, styles.mainFlexContainer)}>
        <Header brand={'Yogo Frozen'} links={links} />
        <Hero title={'Create something wonderful!'} />
        <footer>This is our footer!</footer>
      </div>
    )
  }
}

export default App
