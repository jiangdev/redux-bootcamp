import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import mySaga from './redux/sagas'

import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

ReactDOM.render(
<Provider store={ store }>
  <App/>
</Provider>,document.querySelector('#root'))
