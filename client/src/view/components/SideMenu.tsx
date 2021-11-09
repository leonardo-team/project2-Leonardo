import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../../src/css/custom.css';
import 'materialize-css/dist/css/materialize.css';
import avatar from '../assets/img/avatar04.png';
import image from '../assets/img/photo1.png';

export type SideMenuProps = {
  path?: string,
};

export const SideMenu: FC<SideMenuProps> = ({ path }) => {
  return (
    <div className="SideMenu">
      {path === '/' && (
        <ul id="slide-out" className="side-nav fixed z-depth-4">
          <li>
            <div className="userView">
              <div className="background">
                <img src={image} />
              </div>
              <a href="#!user">
                <img className="circle" src={avatar} />
              </a>
              <a href="#!name">
                <span className="white-text name">Welcome back,</span>
              </a>
              <a href="#!email">
                <span className="white-text email">user!</span>
              </a>
            </div>
          </li>
          <li>
            <form className="sidebar-form">
              <div className="input-group">
                <input
                  id="accounts"
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Найти событие"
                  autoComplete="off"
                />
              </div>
            </form>
          </li>
          <li>
            <Link className="active" to={'/'}>
              <i className="material-icons pink-item">dashboard</i>События
            </Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Management</a>
          </li>
          <li>
            <Link to={'/ShowBill.tsx'}>
              <i className="material-icons pink-item">note_add</i>Новое событие
            </Link>
          </li>
          <li>
            <Link to={'/Tickets.tsx'}>
              <i className="fas fa-ticket-alt"></i>Билеты
            </Link>
          </li>
        </ul>
      )}
      {path === '/ShowBill.tsx' && (
        <ul id="slide-out" className="side-nav fixed z-depth-4">
          <li>
            <div className="userView">
              <div className="background">
                <img src={image} />
              </div>
              <a href="#!user">
                <img className="circle" src={avatar} />
              </a>
              <a href="#!name">
                <span className="white-text name">Welcome back,</span>
              </a>
              <a href="#!email">
                <span className="white-text email">user!</span>
              </a>
            </div>
          </li>
          <li>
            <form className="sidebar-form">
              <div className="input-group">
                <input
                  id="accounts"
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Найти событие"
                  autoComplete="off"
                />
              </div>
            </form>
          </li>
          <li>
            <Link className="active" to={'/'}>
              <i className="material-icons pink-item">dashboard</i>События
            </Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <Link to={'/Tickets.tsx'}>
              <i className="fas fa-ticket-alt"></i>Билеты
            </Link>
          </li>
        </ul>
      )}
      {path === '/Tickets.tsx' && (
        <ul id="slide-out" className="side-nav fixed z-depth-4">
          <li>
            <div className="userView">
              <div className="background">
                <img src={image} />
              </div>
              <a href="#!user">
                <img className="circle" src={avatar} />
              </a>
              <a href="#!name">
                <span className="white-text name">Welcome back,</span>
              </a>
              <a href="#!email">
                <span className="white-text email">user!</span>
              </a>
            </div>
          </li>
          <li>
            <form className="sidebar-form">
              <div className="input-group">
                <input
                  id="accounts"
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Найти событие"
                  autoComplete="off"
                />
              </div>
            </form>
          </li>
          <li>
            <Link className="active" to={'/'}>
              <i className="material-icons pink-item">dashboard</i>События
            </Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a className="subheader">Management</a>
          </li>
          <li>
            <Link to={'/ShowBill.tsx'}>
              <i className="material-icons pink-item">note_add</i>Новое событие
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default SideMenu;
