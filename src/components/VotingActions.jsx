import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class VotingActions extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, labels, activeStep, prevStep, nextStep, selectedFlavour } = this.props
    return (
      <div className={className}>
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
    )
  }
}

VotingActions.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.number.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
  selectedFlavour: PropTypes.object
}

export default VotingActions
