import { connect } from 'react-redux'

import DumbComponent from 'components/DumbComponent'
import { anAction } from 'reducers/aReducer'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onClick (event) {
    dispatch(anAction(event))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbComponent)
