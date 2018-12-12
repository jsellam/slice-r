import { createReducer, createAction } from 'redux-act'
import Immutable from 'seamless-immutable'

const initialState = Immutable({
  screenIndex:0,
  screens:{}
})

export const screenActions = {
  addScreen: createAction('addScreen',file => ({ file }))
}

export const screen = createReducer({
  [screenActions.addScreen]: (state, {file}) => {
    const state2 = Immutable.setIn(state,['screens','Screen'+state.screenIndex],{file,slices:{}})
    console.log("state2",state2)
    return state2.merge({screenIndex:state.screenIndex+1})
  }
}, initialState)

export const screenSelectors = {
  started: (state) => state.screen.stared
}

