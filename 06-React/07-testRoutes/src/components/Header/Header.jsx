import React from 'react'
import { NavLink, Link } from 'react-router'

function Header() {
  return (<>

    <div>Header</div>
    <ul>
      <li> 
      <NavLink to='/'>Home</NavLink>  
      </li>
      <li>  
      <NavLink to='/about'>About</NavLink>  
      </li>
      <li>
      <NavLink to='/login'>Log-in</NavLink>  
      </li>
      <li>
      <NavLink to='/login/home'>Log-in/home</NavLink>  
      </li>
    </ul>
  </>
  )
}

export default Header