import styled from "styled-components"


export const NavbarContainerStyled = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: white;
  box-shadow: 0px 1px 8px -2px rgba(176, 176, 176, 0.34);

  a {
    font-size: 1rem;
    font-weight: bolder;
    align-items: center;
    margin-right: 1rem;
  }

  .links {
    display: flex;
    position: absolute;
    top: -200px; 
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 1;

    a {
      color: black;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      transform: translateY(0);
      opacity: 1; 
      margin: 0;
      a {
        font-size: 1rem;
        color: black;
        display: inline;
      }
    }
  }

  .links.active {
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    height: 130vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 6rem;
    transform: translateY(-70px); 
    opacity: 1; 
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; 

    a {
      color: black;
      font-size: 2rem;
      margin-top: 1rem;
      transition: all 0.5s ease; 
    }
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .hoverLink::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: red;
    transition: width 0.3s ease-in-out;
    transform-origin: left center;
}}

.hoverLink:hover::after {
  width: 100%;
}

`;
export const ImgLogoStyled =styled.img`
    width: 45px;
    padding-right: 4rem;
    cursor: pointer;
`;
