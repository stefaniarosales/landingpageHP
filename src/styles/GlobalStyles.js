import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: white;
        font-family: "sans-serif",sans-serif;
        color: black;
    };

    main {
        display:flex;
        flex-direction: column;
        gap: 2rem;
    };

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
`;

