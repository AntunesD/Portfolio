import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import 'highlight.js/styles/vs2015.css';
import store from "./redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// Vérifie si l'élément avec id "root" existe
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}

// Passer une fonction pour mesurer la performance
reportWebVitals(console.log);
