import react from 'react';

import { Link } from 'react-router-dom';



import '/Frontend/education/HomeWork/FinalProject/project2-Leonardo/client/src/css/custom.css';

import 'materialize-css/dist/css/materialize.css';
import '../assets/css/custom.css';


export function SideMenu() {
  return (
    <ul id='slide-out' className='side-nav fixed z-depth-4'>
    <li>
      <div className='userView'>
        <div className='background'>
          <img src='assets/img/photo1.png'/>
        </div>
        <a href='#!user'><img className='circle' src='assets/img/avatar04.png'/></a>
        <a href='#!name'><span className='white-text name'>Welcome back,</span></a>
        <a href='#!email'><span className='white-text email'>user!</span></a>
      </div>
    </li>

    <li>
      <form className='sidebar-form'>
        <div className='input-group'>
          <input id='accounts' type='text' name='username' className='form-control' placeholder='Найти событие'
                 autoComplete='off' />
        </div>
      </form>
    </li>

    <li><Link className='active' to={'/'}><i className='material-icons pink-item'>dashboard</i>События</Link></li>
    <li>
      <div className='divider'></div>
    </li>

    <li><a className='subheader'>Management</a></li>
    <li><Link to={'/ShowBill.tsx'}><i className='material-icons pink-item'>note_add</i>Новое событие</Link></li>

    <li><a href='eventdetails.html'>
      <i className="fas fa-ticket-alt"></i>Билеты</a>
    </li>
  </ul>
  );
}
export default SideMenu;
