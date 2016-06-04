import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  maxWidth: {
    maxWidth: '1280px'
  }
})

class MakeYourFroyo extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, steps, activeStep, prevStep, nextStep } = this.props
    return (
      <section className={className + ' ' + css(styles.container)} id='pick'>
        <div className={css(styles.maxWidth)}>
          <h2>Enjoying summer is as simple as 1, 2, 3</h2>
          <p>No matter the calendar season, you can always get that sunshine and lollipops feeling by enjoying some Yogo Frozen! Create your own cup full of summer in three simple steps:</p>
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
        </div>
      </section>
    )
  }
}

MakeYourFroyo.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
}

export default MakeYourFroyo
