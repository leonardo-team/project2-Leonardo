import '../components/css/site.css';
import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Home } from '../components/Home/Home';
import { Footer } from '../components/Footer/Footer';
import { PagePathType } from '../../types';


export const HomePage: FC<PagePathType> = ({path})=>{
    return(
        <div className="home_page">
            <Header login="Войти" path={path}/>
            <Home />
            <Footer />
        </div>
    )
}