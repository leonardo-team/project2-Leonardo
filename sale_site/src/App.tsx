import React from 'react'
import './App.css';
import { Header } from './components/header';

import { Rout } from './components/route';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Rout />
      <Footer/>
    </div>
  );
}

export default App;
