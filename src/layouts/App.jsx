import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

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

class App extends Component {
  render () {
    return (
      <div className={css(styles.sansSerif, styles.mainFlexContainer)}>
        <header>This is our header!</header>
        <Hero title={'Create something wonderful!'} />
        <footer>This is our footer!</footer>
      </div>
    )
  }
}

export default App
