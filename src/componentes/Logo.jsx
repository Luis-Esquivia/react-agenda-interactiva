import React from "react";
import logo from '../logo.svg'
import '../stylesheets/Logo.css'

export function Logo(props) {
  return(
    <div className={props.nombreClase}>
      <img 
        src={logo}
        className='img-logo'
        alt='logo-react' />
    </div>
  );
}