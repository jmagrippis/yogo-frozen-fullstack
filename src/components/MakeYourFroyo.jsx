import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { StyleSheet, css } from 'aphrodite'

import getLocalized from 'localization/getLocalized'
import voting from 'localization/voting'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  maxWidth: {
    maxWidth: '1280px',
    padding: '1rem 2rem',
    margin: '1rem'
  }
})

class MakeYourFroyo extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, locale, activeStep, prevStep, nextStep } = this.props
    let steps = voting.steps.map((step) => getLocalized(step, 'label', locale))
    let headline = getLocalized(voting.headline, 'content', locale)
    let body = getLocalized(voting.body, 'content', locale)
    return (
      <section className={className + ' ' + css(styles.container)} id='pick'>
        <Paper className={css(styles.maxWidth)} zDepth={1}>
          <h2>{headline.content}</h2>
          {body.content.map((c, key) => <p key={key}>{c}</p>)}
          <Stepper activeStep={activeStep}>{steps.map((step, key) => (
            <Step key={key}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
          </Stepper>
          <FlatButton
            label='Back'
            disabled={activeStep === 0}
            onTouchTap={prevStep}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={activeStep === 2 ? 'Finish' : 'Next'}
            primary
            onTouchTap={nextStep}
          />
        </Paper>
      </section>
    )
  }
}

MakeYourFroyo.propTypes = {
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
}

export default MakeYourFroyo
