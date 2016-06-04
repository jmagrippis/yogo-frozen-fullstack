import { connect } from 'react-redux'

import App from 'layouts/App'
import { setLocale } from 'reducers/locale'
import { nextStep, prevStep } from 'reducers/voting'
import getLocalized from 'localization/getLocalized'
import navLinks from 'localization/navLinks'
import voting from 'localization/voting'

const mapStateToProps = (state) => ({
  locale: state.locale,
  links: navLinks.map((link) => getLocalized(link, 'label', state.locale)),
  activeStep: state.voting.get('activeStep'),
  steps: voting.steps.map((step) => getLocalized(step, 'label', state.locale))
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
