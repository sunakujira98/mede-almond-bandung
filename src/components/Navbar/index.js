import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './views'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Mede Almond Bandung</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
