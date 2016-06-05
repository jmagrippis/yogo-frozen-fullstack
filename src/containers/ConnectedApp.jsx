import { connect } from 'react-redux'

import App from 'layouts/App'
import { setLocale } from 'reducers/locale'
import { nextStep, prevStep, setFlavour } from 'reducers/voting'

const mapStateToProps = (state) => ({
  locale: state.locale,
  activeStep: state.voting.get('activeStep'),
  flavours: state.api.flavours,
  selectedFlavourId: state.voting.get('flavour')
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage (locale) {
    if (locale === 'en') {
      dispatch(setLocale('el'))
      return
    }
    dispatch(setLocale('en'))
  },
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
)(App)
