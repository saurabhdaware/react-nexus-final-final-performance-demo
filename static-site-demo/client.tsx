import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { isSSR } from './magicFlags';

if (isSSR) {
  ReactDOM.hydrateRoot(
    document.getElementById('root')!, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(
    document.getElementById('root')!
  );

  root.render(<App />)
}