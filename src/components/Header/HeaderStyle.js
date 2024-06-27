import styled from "styled-components";

export const HeaderContainer=styled.header`

    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;

    position: fixed;
    top: 0;
    left: 0;
    width: 95%;
    z-index: 1000;

`;

export const ImgLogo=styled.img`

    width: 3rem;
    padding: 0.5rem;

    cursor: pointer;
`;

export const NavbarContainer=styled.nav`

    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

export const LinksOl=styled.ol`

    display: flex;
    gap: 1rem;
`;

export const LinkLi=styled.li`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.2rem;

    a {
        font-size: 15px;
        font-weight: bolder;
        align-items: center;
    }

    a:hover {
        color:grey;
        cursor: pointer;
    }
`;

