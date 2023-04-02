import styled from "styled-components";
import ImgSrc from '../../img/bg.jpg';

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 16px;

  background-image: url(${ImgSrc});
  background-size: cover;

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #000000c4;
  }

  h1 {
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  position: relative;
  margin-top: 24px;
  min-height: 280px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  background: inherit;
  border: 1px solid #645b2b;

  z-index: 1;

  @media only screen and (max-width: 600px) {
    padding: 32px 24px;
  }

  &:before{
    width: 110%;
    height: 110%;
    content: "";
    position: absolute;
    bottom: -5%;
    right: -5%;
    background: inherit;
    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.2);
    filter: blur(10px);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 110%;
    height: 110%;
    background: #000000c4;
    left: 0;
    top: 0;
  }

  .header {
    border-bottom: 1px solid #ffffff61;
    padding-top: 16px;
    padding-bottom: 24px;
    margin-bottom: 32px;
    z-index: 1;
    color: var(--color-whitetext);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    color: var(--color-whitetext);

    label {
      color: #f4f4f4;
    }

    input {
      border: 1px solid #ffffff63;
      color: var(--color-whitetext);

      &::placeholder{
          color: #ffffff63;
      }
    }
  }

  .extra {
    text-align: center;
    margin-top: 32px;
  }
`;
