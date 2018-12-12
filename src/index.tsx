import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureI18n } from './i18n';
import { configureStore } from './state';
import { Provider } from 'react-redux';

configureI18n('pl');

ReactDOM.render(<Provider store={configureStore()}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
