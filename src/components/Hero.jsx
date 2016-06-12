import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { white } from 'material-ui/styles/colors'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 2rem',
    color: white,
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem'
  },
  body: {
    margin: '0 0 2rem'
  }
})

class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, title, body, cta, target } = this.props
    return (
      <Paper className={className} zDepth={2} style={{ backgroundColor: 'rgba(0, 188, 212, 0.8)' }}>
        <div className={css(styles.container)}>
          <h1 className={css(styles.title)}>{title}</h1>
          <p className={css(styles.body)}>{body}</p>
          <RaisedButton primary labelStyle={{ fontSize: '1.25rem', padding: '0.5rem 2rem' }} label={cta} linkButton href={target} />
        </div>
      </Paper>
    )
  }
}

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired
}

export default Hero
