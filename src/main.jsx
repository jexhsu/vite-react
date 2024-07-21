import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const domNood = document.getElementById('root');
const root = createRoot(domNood);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
