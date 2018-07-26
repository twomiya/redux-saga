import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';


import rootReducer from './reducers';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {RootSaga} from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(RootSaga)
const App=(
    <Provider store={store}>
    <Test />
 </Provider>
)

ReactDOM.render(App,document.getElementById('root'));

registerServiceWorker();
