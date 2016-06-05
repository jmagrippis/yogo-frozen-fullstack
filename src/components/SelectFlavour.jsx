import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

class SelectFlavour extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, flavours, selectedId, locale, setFlavour, intro } = this.props
    console.log(selectedId)
    return (
      <div className={className}>
        <p style={{ textAlign: 'center' }}><i>{intro}</i></p>
        <RadioButtonGroup
          name={'flavour'}
          valueSelected={selectedId}
          onChange={(_, value) => selectedId !== value && setFlavour(value)}
        >
          {flavours.valueSeq().map(flavour => (
            <RadioButton
              key={flavour.get('id')}
              value={flavour.get('id')}
              label={flavour.get('name_' + locale)}
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
            />
          ))}
        </RadioButtonGroup>
      </div>
    )
  }
}

SelectFlavour.propTypes = {
  className: PropTypes.string,
  flavours: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  setFlavour: PropTypes.func.isRequired,
  selectedId: PropTypes.string,
  intro: PropTypes.string
}

export default SelectFlavour
