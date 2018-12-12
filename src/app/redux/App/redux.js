import { createReducer, createAction } from 'redux-act'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  started: false
})

export const appActions = {
  start: createAction('start app')
}

export const app = createReducer({
  [appActions.start]: state => state.merge({started:true})
}, initialState)

export const appSelectors = {
  started: (state) => state.app.stared
}

