import { FC } from 'react'
import './site.css'

export type SiteProps = {
    myName?: string
}



export const Site: FC<SiteProps> = () => {
    return (
        <div className="Site">
  <div className="mdl-card__title">
    <h2 className="mdl-card__title-text">Welcome</h2>
  </div>
  <div className="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>
  <div className="mdl-card__actions mdl-card--border">
    <p className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </p>
  </div>
  <div className="mdl-card__menu">
    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i className="material-icons">share</i>
    </button>
  </div>
        </div>
    )
};