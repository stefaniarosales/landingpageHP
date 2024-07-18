import styled from "styled-components";


export const NavbarContainerStyled = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: white;
  box-shadow: 0px 1px 8px -2px rgba(176, 176, 176, 0.34);

  a {
    font-size: 1rem;
    font-weight: bolder;
    align-items: center;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -200px; /* Initial position for smoother transition */
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Separate transitions for transform and opacity */
    opacity: 1; /* Initially hidden */

    a {
      color: black;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      transform: translateY(0);
      opacity: 1; /* Visible on larger screens */
      margin: 0;
      padding-left: 3rem;
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
    transform: translateY(-70px); /* Transitioning state */
    opacity: 1; /* Fully visible */
    /* ... other styles for active state */
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; /* Separate transitions for smooth animation */

    a {
      color: black;
      font-size: 2rem;
      margin-top: 1rem;
      transition: all 0.5s ease; /* Maintain a separate transition for link elements within the active state */
    }
  }

  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;



export const ImgLogoStyled =styled.img`
    width: 4rem;
    padding: 0.5rem;
    padding-right: 3rem;
    cursor: pointer;
`;
