import { connect } from 'react-redux'

import App from 'layouts/App'
import { setLocale } from 'reducers/locale'
import { nextStep, prevStep } from 'reducers/voting'

const mapStateToProps = (state) => ({
  locale: state.locale,
  activeStep: state.voting.get('activeStep')
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
