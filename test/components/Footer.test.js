import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Footer from 'components/Footer'

describe('(Component) Footer', () => {
  it('should exist and have 3 paragraphs', () => {
    let data = {
      locale: 'en'
    }
    let wrapper = shallow(<Footer {...data} />)
    expect(wrapper.find('p').length).to.equal(3)
  })
})
