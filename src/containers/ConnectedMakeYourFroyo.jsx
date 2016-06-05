import { connect } from 'react-redux'

import MakeYourFroyo from 'components/MakeYourFroyo'
import { nextStep, prevStep, setFlavour, toggleTopping } from 'reducers/voting'

const mapStateToProps = (state) => ({
  activeStep: state.voting.get('activeStep'),
  flavours: state.api.flavours,
  selectedFlavour: state.api.flavours.get(state.voting.get('flavour')),
  toppings: state.api.toppings,
  selectedToppingIds: state.voting.get('toppings')
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
  },
  toggleTopping (toppingId) {
    dispatch(toggleTopping(toppingId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeYourFroyo)
