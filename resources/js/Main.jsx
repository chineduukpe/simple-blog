import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/Layout.jsx'

const store = createStore(rootReducer, applyMiddleware(thunk));

const Main = (props) => {
    return (
        <Provider store={store}>
            <Router>
                 <Layout />
            </Router>
        </Provider>

    )
}

ReactDOM.render(<Main />, document.getElementById('app'))