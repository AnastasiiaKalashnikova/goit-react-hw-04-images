import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyled';
import { Toaster } from 'react-hot-toast';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <Toaster />
  </React.StrictMode>
);
