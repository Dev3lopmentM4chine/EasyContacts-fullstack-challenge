import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    input{
        outline: none;
        border: none;
        background-color: unset;
    }
    
    button{
        border: none;
        background-color: unset;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

    .errorMessage{
        color: var(--color-secondary);
        font-size: var(--font-size-2);
    }
`;

export default Reset;
