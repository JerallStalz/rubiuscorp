import { Logo, Nav, NavLinks, NavLink, NavCarIcon } from './styled-navbar'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Nav>
      <Logo><Image src='/logo.png' layout='fill' /></Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>MadKat</NavLink>
        <NavLink>Yandere</NavLink>
        <NavLink>Anti Otaku Otaku Club</NavLink>
        <NavLink>MadKat Urban</NavLink>
        <NavCarIcon>
          <FaShoppingCart color={'#fff'}/>
        </NavCarIcon>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
