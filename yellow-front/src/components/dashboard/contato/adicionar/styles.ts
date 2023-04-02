import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 24px;

    @media only screen and (max-width: 600px) {
      padding-left: var(--padding-left);
      padding-right: var(--padding-right);
    }
`;

export const Form = styled.form`
  width: 100%;
  text-align: right;
  margin-top: 24px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 32px;

  .content {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    text-align: left;

    div {
      width: 100%;
    }

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 767px) {
    button, input {
      width: 100%;
    }
  }
`;
