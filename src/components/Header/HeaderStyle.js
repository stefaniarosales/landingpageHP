import styled from "styled-components";

export const HeaderContainer=styled.header`

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: white;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;

export const ImgLogo=styled.img`

    width: 3rem;
    padding: 0.5rem;
    cursor: pointer;
`;

export const NavbarContainer=styled.nav`

    width: 70%;
    display:flex;
    justify-content: flex-end;
    margin: 0;
`;

export const LinksOl=styled.ol`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-right: 1rem;
    margin: 0;
`;

export const LinkLi=styled.li`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;

    a {
        font-size: 15px;
        font-weight: bolder;
        align-items: center;
    }

    a:hover {
        color: #992721;
        cursor: pointer;
    }
`;

