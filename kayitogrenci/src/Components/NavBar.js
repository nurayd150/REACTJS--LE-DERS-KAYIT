import React from 'react'
import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
        <Link to='/'>Home</Link>
        <Link to='/DersSecim'>DersSecim</Link>
        <Link to='/Login'>Login</Link>
    </nav>
  )
}

export default NavBar