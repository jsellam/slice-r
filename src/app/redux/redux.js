import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as entities from '.'

const reducers = {
}

Object.keys(entities)

  .forEach((key) => {
    if(typeof entities[key] === 'function')
      reducers[key] = entities[key]
  })

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

export const reducer = combineReducers(reducers)
export const store = createStore(reducer, enhancer)
