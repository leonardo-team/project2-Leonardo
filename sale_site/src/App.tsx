import React from 'react'
import './App.css';
import { Header } from './components/pages/header';
import { Futer } from './components/pages/footer';
import { Main } from './components/pages/main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Futer/>
    </div>
  );
}

export default App;
