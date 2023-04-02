import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 24px;

  @media only screen and (max-width: 600px) {
    padding-left: var(--padding-left);
    padding-right: var(--padding-right);
  }

  .noResults {
    text-align: center;
    margin-top: 64px;
    font-weight: bold;
    font-size: 18px;
    opacity: 0.6;
  }

  .contactList {
    display: flex;
    margin-top: 32px;
    gap: 24px;
    flex-wrap: wrap;

    .contactItem {
      padding: 24px;
      border: 1px solid #b7b6b6;
      border-radius: 8px;
      cursor: pointer;
      transition: all 300ms linear;

      &:hover {
        background: #ffd6002e;
        border-color: #b1b108;
      }

      h4 {
        font-size: 16px;
        margin-bottom: 16px;
      }
    }
  }
`;
