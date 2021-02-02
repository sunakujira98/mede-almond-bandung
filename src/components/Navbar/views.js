import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { ReactComponent as Icon } from '../../images/peanut.svg'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`

export const NavLink = styled(Link)`
  color: #e9ba23;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #e9ba23;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`

export const Bars = styled(Icon)`
  width: 50px;
  height: 50px;
  fill: #e9ba23;
  font-size: 2rem;
  transform: translate(-50%, -15%);
`
