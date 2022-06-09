import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_pt from "./translations/pt/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    pt: {
      common: common_pt,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </I18nextProvider>
);
