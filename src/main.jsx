import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';
//import { FirstApp } from './FirstApp'  // Importación nombrada
import "./styles.css";
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {<CounterApp value={0}/>}
    {/*<FirstApp title="Hola soy Tomas" />*/}
  </React.StrictMode>
);
