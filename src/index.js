import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'normalize.css';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer, { initializeState } from './reducers';
import rootSaga from './sagas';
import App from './routes/App';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11';

//회원 인증
const authenticationData = sessionStorage.getItem('auth');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    authenticationData
        ? {
              ...initializeState,
              auth: { ...JSON.parse(authenticationData) },
          }
        : initializeState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
