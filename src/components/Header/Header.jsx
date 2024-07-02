import React from 'react'
import { HeaderContainer, ImgLogo, NavbarContainer, LinksOl, LinkLi} from "./HeaderStyle"


function Header() {
  return (
    <>
      <HeaderContainer>
          <ImgLogo src="/logo/HPLogo.png"/>
          <NavbarContainer>
            <LinksOl>
              <LinkLi><a href="#">Home</a></LinkLi>
              <LinkLi><a href="#">Aboust Us</a></LinkLi>
              <LinkLi><a href="#">Products</a></LinkLi>
              <LinkLi><a href="#">Contact</a></LinkLi>
            </LinksOl>
          </NavbarContainer>
      </HeaderContainer>
    </>
  )
};

export default Header
