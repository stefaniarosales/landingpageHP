import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
        /* scroll-behavior: smooth; */
    };

    body {
        margin: 0;
        padding: 0;
        background-color: white;
        font-family: "sans-serif",sans-serif;
        color: black;
        /* overflow-x:hidden; */
    };

    main {
        display:flex;
        flex-direction: column;
        gap: 2rem;
        
    }

    a {
        text-decoration: none;
        
    };

    a:visited {
        color: black;
    };

    li {
        list-style: none;
    };
    button {
        border: none !important;
    }
`

