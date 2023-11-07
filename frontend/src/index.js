import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import {reduxConfig, persistor} from './redux'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxConfig}>
    <PersistGate loading={null} persistor = {persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)


