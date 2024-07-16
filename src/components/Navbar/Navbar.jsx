/* import React from 'react'
import { useState } from 'react'
import { NavbarContainerStyled, ImgLogoStyled } from './NavbarStyled'
import BurgerButton from './BurgerButton/BurgerButton'

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleclick = () => setClicked(!clicked)
  return (
    <>
      <NavbarContainerStyled>
        <ImgLogoStyled src="/logo/HpLogo.png"/>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="">Home</a>
          <a href="">Abouts Us</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleclick}/>
        </div>
      </NavbarContainerStyled>
    </>
  )
}
 */

import React from 'react'
import { useState } from 'react'
import { NavbarContainerStyled, ImgLogoStyled } from './NavbarStyled'
import BurgerButton from './BurgerButton/BurgerButton'

import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleclick = () => setClicked(!clicked)
  return (
    <>
      <NavbarContainerStyled>
        <ImgLogoStyled src='./logo/HPLogo.png'/>
        <div className={`links ${clicked ? 'active' : ''}`}>

          <Link to='/'>Home</Link>
          <Link to='AboutUsPage'>About Us</Link>
          <Link to='ProductsPage'>Products</Link>
          <Link to='ContactPage'>Contact</Link>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleclick}/>
        </div>
      </NavbarContainerStyled>
      <Outlet/>
    </>
  )
}
