import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import pageReducer from './store/reducers/pages'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
const store = createStore(pageReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
