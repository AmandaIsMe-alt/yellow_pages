import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 300ms linear;
    }
    :root {
        --primary: #ffd600;

        --error:#930c03;

        --color-text:  #111;
        --color-whitetext:  #F8F9FA;

        --padding-left: 16px;
        --padding-right: 16px;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 15px;
        color: var(--color-text);
        line-height: 24px;
    }

    a {
        color: var(--primary);
    }

    ul{
        list-style: none;
    }

    label {
        margin-bottom: 4px;
        font-size: 13px;
        color: var(--color-text);
        display: block;
    }

    input {
        width: 100%;
        display: block;
        min-height: 40px;
        border-radius: 5px;
        padding: 8px 14px;
        background: transparent;
        border: 1px solid #a1a1a1;
        color: var(--color-text);

        &::placeholder{
            color: #a1a1a1;
        }

        &:focus{
            border: 1px solid var(--primary);
            outline: none;
        }
    }

    .error-message {
        color: var(--error);
        font-size: 12px;
        display: block;
        font-weight: bold;
        margin-top: 4px;
        margin-bottom: 16px;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 10px 24px;
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        font-family: inherit;
        cursor: pointer;
        margin: 8px 0;

        &:hover {
            background: transparent;
            border: 1px solid transparent;
        }

        &:focus,
        &:focus-visible {
            outline: none;
        }
    }

    .btnPrimary {
        background: var(--primary);

        &:hover {
            border-color: var(--primary);
            color: var(--primary);
        }
    }

    .btnError {
        background: var(--error);
        color: #fff;

        &:hover {
            border-color: var(--error);
            color: var(--error);
        }
    }
`;

export default GlobalStyle;
