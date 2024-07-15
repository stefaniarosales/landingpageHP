import React from 'react'
import { useState } from 'react'
import { NavbarContainerStyled, ImgLogoStyled } from './NavbarStyled'
import BurgerButton from './BurgerButton/BurgerButton'

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleclick = () => setClicked(!clicked)
  return (
    <>
      <NavbarContainerStyled>
      <ImgLogoStyled src="/public/logo/HpLogo.png"/>
      <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="">Home</a>
          <a href="">Abouts Us</a>
          <a href="">Productos</a>
          <a href="">Contact</a>
      </div>
      <div className='burger'>
        <BurgerButton clicked={clicked} handleClick={handleclick}/>
      </div>
      </NavbarContainerStyled>
    </>
  )
}
