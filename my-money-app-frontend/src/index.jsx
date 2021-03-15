import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import RootReducer from './main/rootReducer'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'   // Espera a requisição http ser atendida (promisse) e só resolve a ação quando a requisição for efetivada
import multi from 'redux-multi'       // Dispara várias actions com uma única action creator. Essas actions devem estar entre colchetes (array).  
import thunk from 'redux-thunk'       // Faz o action creator retornar uma função nmo lugar de uma action. Estas funções podem retornar uma action.

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise,multi,thunk)(createStore)(RootReducer, devTools)

ReactDOM.render(
    
    <Provider store={store} >
        <App/>
    </Provider>
    
    , document.getElementById('app')
)