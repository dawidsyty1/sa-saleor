import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './translations';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

i18next.init(i18nextConfig);


ReactDOM.render(
  <I18nextProvider i18n={i18next}>
  <App />
  </I18nextProvider>
  , document.getElementById('root'));
registerServiceWorker();
