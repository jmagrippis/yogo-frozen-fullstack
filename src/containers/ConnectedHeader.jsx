import { connect } from 'react-redux'

import Header from 'components/Header'
import { toggleSidebar } from 'reducers/sidebar'

const mapStateToProps = (state) => ({
  sidebar: state.sidebar
})

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar () {
    dispatch(toggleSidebar())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
