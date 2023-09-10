import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { localEn, localZh } from './i18n';

const defaultLanguage = localStorage.getItem('language');
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: localEn },
      'zh-TW': { translation: localZh },
    },
    lng: defaultLanguage || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
