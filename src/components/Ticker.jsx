import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import RaisedButton from 'material-ui/RaisedButton'
import { white, blueGrey800 } from 'material-ui/styles/colors'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  bg: {
    color: white,
    backgroundColor: blueGrey800,
    padding: '1rem .25rem'
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1280px',
    textAlign: 'center'
  },
  breath: {
    margin: '0 .5rem'
  },
  flex: {
    flex: '1'
  }
})

class Ticker extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, body, cta, login } = this.props
    return (
      <div className={className ? className + ' ' : '' + css(styles.bg)}>
        <div className={css(styles.container)}>
          <div className={css(styles.breath, styles.flex)}>{body}</div>
          <RaisedButton
            className={css(styles.breath)}
            label={cta}
            primary
            onTouchTap={login}
          />
        </div>
      </div>
    )
  }
}

Ticker.propTypes = {
  className: PropTypes.string,
  body: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
}

export default Ticker
