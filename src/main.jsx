import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp'  // Importación nombrada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
