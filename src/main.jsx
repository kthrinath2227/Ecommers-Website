import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ use HashRouter instead of BrowserRouter
import App from '@/App';
import '@/index.css';
import { Toaster } from '@/components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Toaster />
    </HashRouter>
  </React.StrictMode>
);
