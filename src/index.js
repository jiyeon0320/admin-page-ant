import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'normalize.css';
import App from './App';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
