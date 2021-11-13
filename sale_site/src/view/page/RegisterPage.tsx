import '../components/css/site.css';
import { FC } from 'react';

import { Header } from '../components/Header/Header';

import { Footer } from '../components/Footer/Footer';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { PagePathType } from '../../types';



export const RegisterPage: FC<PagePathType> = ({path})=>{
    return(
        <div className="register_page">
            <Header login="На главную" path={path}/>
            <RegisterForm />
            <Footer />
        </div>
    )
}