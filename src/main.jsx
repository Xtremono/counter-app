import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp'  // Importación nombrada
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp  subTitle={30}/>
  </React.StrictMode>
);
