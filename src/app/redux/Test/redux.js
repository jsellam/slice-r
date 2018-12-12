import { createReducer, createAction } from 'redux-act'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  testable: false
})

export const testActions = {
  test: createAction('start test')
}

export const test = createReducer({
  [testActions.test]: state => state.merge({testable:true})
}, initialState)

export const testSelectors = {
  testable: (state) => state.test.testable
}

