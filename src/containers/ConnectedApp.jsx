import { connect } from 'react-redux'

import App from 'layouts/App'
import { setLocale } from 'reducers/locale'
import { toggleSidebar } from 'reducers/sidebar'

const mapStateToProps = (state) => ({
  locale: state.locale,
  sidebar: state.sidebar,
  windowWidth: state.windowWidth
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage (locale) {
    if (locale === 'en') {
      dispatch(setLocale('el'))
      return
    }
    dispatch(setLocale('en'))
  },
  toggleSidebar () {
    dispatch(toggleSidebar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
