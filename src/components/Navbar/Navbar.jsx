
import React from 'react'
import { useState } from 'react'
import { NavbarContainerStyled, ImgLogoStyled, ContainerLogoCart} from './NavbarStyled'
import BurgerButton from './BurgerButton/BurgerButton'
import CartButton from './Cart/CartButton'
import Cart from './Cart/Cart'


import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleclick = () => setClicked(!clicked)

  const closeNavbar = () => setClicked(false) //cerrar el navbar al hacer click
  

  return (
    <>
      <NavbarContainerStyled>
        <ContainerLogoCart>
          <CartButton />
          <Cart />
          <ImgLogoStyled src='./logo/HPLogo.png'/>
        </ContainerLogoCart>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className='hoverLink' to='/' onClick={closeNavbar}>Home</Link>
          <Link className='hoverLink' to='AboutUsPage' onClick={closeNavbar}>About Us</Link>
          <Link className='hoverLink' to='ProductsPage' onClick={closeNavbar}>Products</Link>
          <Link className='hoverLink' to='ContactPage' onClick={closeNavbar}>Contact</Link>
        </div>
        
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleclick}/>
        </div>
        
      </NavbarContainerStyled>
      <Outlet/>
    </>
  )
}
