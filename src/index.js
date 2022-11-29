import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetection from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetection)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

