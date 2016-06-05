import { connect } from 'react-redux'

import App from 'layouts/App'
import { setLocale } from 'reducers/locale'

const mapStateToProps = (state) => ({
  locale: state.locale
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage (locale) {
    if (locale === 'en') {
      dispatch(setLocale('el'))
      return
    }
    dispatch(setLocale('en'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
