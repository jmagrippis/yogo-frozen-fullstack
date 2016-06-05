import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import { StyleSheet, css } from 'aphrodite'

import SelectFlavour from 'components/SelectFlavour'
import SelectToppings from 'components/SelectToppings'
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
  },
  maxWidthSmall: {
    maxWidth: '480px'
  },
  mb: {
    marginBottom: '1.5rem'
  }
})

class MakeYourFroyo extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getStepContent ({ locale, activeStep, prevStep, nextStep, flavours, setFlavour,
    selectedFlavour, toppings, toggleTopping, selectedToppingIds }) {
    let flavourIntro = getLocalized(voting.flavourIntro, 'content', locale)
    let toppingsIntro = getLocalized(voting.toppingsIntro, 'content', locale)
    switch (activeStep) {
      case 0:
        if (flavours.count() < 1) return <CircularProgress className={css(styles.mb)} />
        return (
          <SelectFlavour
            className={css(styles.mb, styles.maxWidthSmall, styles.container)}
            flavours={flavours}
            setFlavour={setFlavour}
            selectedId={selectedFlavour && selectedFlavour.get('id')}
            locale={locale}
            intro={flavourIntro.content}
          />
        )
      case 1:
        if (toppings.count() < 1) return <CircularProgress className={css(styles.mb)} />
        return (
          <SelectToppings
            className={css(styles.mb, styles.maxWidthSmall, styles.container)}
            toppings={toppings}
            toggleTopping={toggleTopping}
            selectedIds={selectedToppingIds}
            locale={locale}
            selectedFlavour={selectedFlavour.get('name_' + locale)}
            intro={toppingsIntro.content}
          />
        )
      default:
        return <div>How did you get here?</div>
    }
  }

  render () {
    let { className, locale, activeStep, prevStep, nextStep, flavours, setFlavour,
      selectedFlavour, toppings, toggleTopping, selectedToppingIds } = this.props
    let steps = voting.steps.map((step) => getLocalized(step, 'label', locale))
    let headline = getLocalized(voting.headline, 'content', locale)
    let body = getLocalized(voting.body, 'content', locale)
    let labels = getLocalized(voting.buttons, 'content', locale).content

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
          <div className={css(styles.container)}>
            {this.getStepContent({ locale, activeStep, prevStep, nextStep, flavours,
              setFlavour, selectedFlavour, toppings, toggleTopping, selectedToppingIds })}
            <div>
              <FlatButton
                label={labels.back}
                disabled={activeStep === 0}
                onTouchTap={prevStep}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={activeStep > 1 ? labels.vote : labels.next}
                primary
                disabled={activeStep === 0 && !selectedFlavour}
                onTouchTap={nextStep}
              />
            </div>
          </div>
        </Paper>
      </section>
    )
  }
}

MakeYourFroyo.propTypes = {
  className: PropTypes.string,
  locale: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  flavours: PropTypes.object.isRequired,
  setFlavour: PropTypes.func.isRequired,
  selectedFlavour: PropTypes.object,
  toppings: PropTypes.object.isRequired,
  toggleTopping: PropTypes.func.isRequired,
  selectedToppingIds: PropTypes.object
}

export default MakeYourFroyo
