import styled from "styled-components";
import ImgSrc from '../../../img/bg.jpg';

const HeaderContainer = styled.header`

  display: flex;
  align-items: center;

  background-image: url(${ImgSrc});
  background-size: cover;
  background-attachment: fixed;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #000000c4;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    
    z-index: 1;

    padding-top: 40px;
    padding-bottom: 40px;

    padding-left: 32px;
    padding-right: 32px;

    @media only screen and (max-width: 600px) {
      padding-left: var(--padding-left);
      padding-right: var(--padding-right);
    }

    p {
        color: #fff;
        font-style: italic;
    }
  }
`;

export default HeaderContainer;