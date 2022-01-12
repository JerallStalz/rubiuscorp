import styled from 'styled-components'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.figure`
  background: #000;
  position: relative;
  height: 70px;
  width: 150px;
  margin-left: 20px;
`

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
`

export const NavLink = styled.button`
height: 100%;
color: #fff;
font-size: 16px;
background: transparent;
border: none;
font-family: 'Lato', sans-serif;
margin-right: 20px;
`

export const NavCarIcon = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
  `
