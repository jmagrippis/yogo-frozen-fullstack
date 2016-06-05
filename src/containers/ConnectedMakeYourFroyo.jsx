import { connect } from 'react-redux'

import MakeYourFroyo from 'components/MakeYourFroyo'
import { nextStep, prevStep, setFlavour } from 'reducers/voting'

const mapStateToProps = (state) => ({
  activeStep: state.voting.get('activeStep'),
  flavours: state.api.flavours,
  selectedFlavour: state.api.flavours.get(state.voting.get('flavour'))
})

const mapDispatchToProps = (dispatch) => ({
  nextStep () {
    dispatch(nextStep())
  },
  prevStep () {
    dispatch(prevStep())
  },
  setFlavour (flavourId) {
    dispatch(setFlavour(flavourId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeYourFroyo)
