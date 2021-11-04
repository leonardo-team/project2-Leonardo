import {FC} from 'react';
import { Footer } from 'react-mdl';
import { Home } from '../components/home';
import { Header } from '../components/header';
import './site.css'


export function Main(){
  return (
    <div className="Main">
        <Header />
        <Home />
        <Footer />
    </div>
  )
}