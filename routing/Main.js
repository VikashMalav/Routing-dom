import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Main() {
  return (
    <div>
<nav><ul>
<li><Link to='/'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/contact'>contact</Link></li>
<li><Link to='/services'>services</Link></li>
<li><Link to='/blog'>Blog</Link></li>




</ul>
</nav>
<Outlet/>

    </div>
  )
}

export default Main