import React from 'react';
import './App.css'
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
};
export default App;