import React, { PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  smallMargin: {
    margin: '0.5rem 0'
  }
})

class VoteIncentive extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  getToppingsList (toppings, locale) {
    if (toppings.count() < 1) return
    if (toppings.count() === 1) return <span>, {locale === 'en' ? 'with' : 'με'} <i>{toppings}</i></span>
    return <span>, {locale === 'en' ? 'with' : 'με'} {toppings.butLast().map((topping, key) => <i key={key}>{topping}{key !== toppings.count() - 2 ? ', ' : ' '}</i>)} {locale === 'en' ? 'and' : 'και'} <i>{toppings.last()}</i></span>
  }

  render () {
    let { className, selectedFlavour, selectedToppings, locale, intro } = this.props
    return (
      <div className={className}>
        <p className={css(styles.smallMargin)}>{intro[0]}</p>
        <p className={css(styles.smallMargin)}>{intro[1]} <strong>{selectedFlavour}</strong>{this.getToppingsList(selectedToppings, locale)}{locale === 'en' ? '?' : ';'}</p>
        <p className={css(styles.smallMargin)}>{intro[2]}</p>
      </div>
    )
  }
}

VoteIncentive.propTypes = {
  className: PropTypes.string,
  selectedFlavour: PropTypes.string.isRequired,
  selectedToppings: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  intro: PropTypes.array.isRequired
}

export default VoteIncentive
