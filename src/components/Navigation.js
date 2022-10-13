import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>

      {/* <a href='/'>Home</a> */}
      <Link to=''>Home</Link>

      {/* <a href='/about'>About</a> */}
      <Link to='/about'>About</Link>

    </div>
  )
}

export default Navigation