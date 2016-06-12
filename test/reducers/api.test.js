import { isFetching, isStale } from 'reducers/api'
import { expect } from 'chai'
import { Map } from 'immutable'
import sinon from 'sinon'

describe('(Redux) api', () => {
  describe('(Methods)', () => {
    it('returns whether any of the API calls are still fetching', () => {
      let state = {
        meta: Map({
          isFetching: Map({
            nope: false,
            yep: true
          })
        })
      }

      expect(isFetching(state)).to.be.true

      state = {
        meta: Map({
          isFetching: Map({
            nope: false,
            yep: false
          })
        })
      }
      expect(isFetching(state)).to.be.false

      let spy = sinon.spy()

      state = {
        meta: Map({
          isFetching: Map({
            nope: true,
            yep: spy
          })
        })
      }
      expect(isFetching(state)).to.be.true
      expect(spy.notCalled).to.be.true
    })
    it('returns whether state is stale compared to the given date', () => {
      const comparativeDate = new Date(1465681700000)
      const oldDate = new Date(1464987600000)
      const closeDate = new Date(1465671700000)
      const ancientDate = new Date(1234567890000)

      const state = {
        meta: Map({
          lastUpdated: Map({
            oldDate,
            closeDate,
            ancientDate
          })
        })
      }

      expect(isStale(state, 'oldDate', comparativeDate)).to.be.true
      expect(isStale(state, 'closeDate', comparativeDate)).to.be.false
      expect(isStale(state, 'ancientDate', comparativeDate)).to.be.true
    })
  })
})
