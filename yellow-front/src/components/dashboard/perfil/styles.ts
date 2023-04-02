import styled from "styled-components";

export const Aside = styled.aside`
  padding: 32px;

  border-right: 2px dashed #ddd;

  .sidebar {
    position: sticky;
    top: 10px;
    margin: 0px 0 24px 0;
    z-index: 1;
    -webkit-transition: margin-top .4s ease-in-out;
    transition: margin-top .4s ease-in-out;
    //margin-top: -70px;
  }

  @media only screen and (max-width: 600px) {
    padding-left: var(--padding-left);
    padding-right: var(--padding-right);

    border-right: none;
    border-bottom: 2px dashed #ddd;
  }

  h2 {
    margin-bottom: 32px;
  }

  .btnGroup {
    margin-top: 32px;

    button {
      width: 100%;
    }
  }
`;
