import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

class SelectToppings extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    let { className, toppings, selectedIds, locale, toggleTopping, selectedFlavour, intro } = this.props
    return (
      <div className={className}>
        <p style={{ textAlign: 'center' }}><strong style={{ textTransform: 'capitalize' }}>{selectedFlavour}</strong>{locale === 'en' ? '?' : ';'} <i>{intro}</i></p>
        <div>
          {toppings.valueSeq().map(topping => (
            <Checkbox
              key={topping.get('id')}
              checked={selectedIds.has(topping.get('id'))}
              onCheck={() => toggleTopping(topping.get('id'))}
              label={topping.get('name_' + locale)}
              labelStyle={{ width: '100%' }}
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
            />
          ))}
        </div>
      </div>
    )
  }
}

SelectToppings.propTypes = {
  className: PropTypes.string,
  toppings: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  toggleTopping: PropTypes.func.isRequired,
  selectedIds: PropTypes.object,
  selectedFlavour: PropTypes.string,
  intro: PropTypes.string
}

export default SelectToppings
