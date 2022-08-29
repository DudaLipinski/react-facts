import React from 'react';
import Logo from '../assets/react.svg'

function Navbar() {
  return (
    <header className="main-nav">
      <div className="main-nav__list">
        <div className="main-nav__item--logo">
          <img className="main-nav__img" src={Logo}></img>
          <h3 className="main-nav__h3">ReactFacts</h3>
        </div>
        <div>
          <h4 className="main-nav__h4">React Course - Project 1</h4>
        </div>
      </div>
    </header>
  )
}

export default Navbar;