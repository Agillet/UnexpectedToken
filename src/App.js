import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Router from './Router'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
