import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "./redux/store";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
