import '../components/css/site.css';
import { FC } from 'react';

import { Header } from '../components/Header/Header';

import { Footer } from '../components/Footer/Footer';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { PagePathType } from '../../types';


export const LoginPage: FC<PagePathType> = ({path})=>{
    return(
        <div className="login_page">
            <Header login="Зарегистрироваться" path={path}/>
            <LoginForm />
            <Footer />
        </div>
    )
}