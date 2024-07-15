import React from 'react'
import { HeaderContainerStyled} from "./HeaderStyle"
import Navbar from '../Navbar/Navbar'


function Header() {
  return (
    <>
      <HeaderContainerStyled>
        <Navbar/>
      </HeaderContainerStyled>
    </>
  )
};

export default Header


