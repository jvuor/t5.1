import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = () => (
  <div>
    <Link to="/">home</Link> |
    <Link to="/blogs">notes</Link> |
    <Link to="/login">users</Link> 
  </div>
)

export default Menubar