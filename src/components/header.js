import React from 'react'
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <div>
        <h1>Click</h1>
            <Link to="/">Home</Link>||
            <Link to="/contact">Contact</Link>||
            <Link to="/about">About</Link>||
            <Link to="/team">Team</Link>||
            <Link to="/courses">Courses</Link>
    </div>
  )
}
