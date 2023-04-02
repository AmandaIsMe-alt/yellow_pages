import styled from "styled-components";

const Container = styled.main`

  > .content {
    padding: 72px 0;

    display: flex;
    justify-content: center;
    gap: 16px;

    width: 100%;
    max-width: 85%;
    
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
      padding: 16px 0;
      max-width: 100%;

      flex-direction: column;
    }
  }
`;

export default Container;
