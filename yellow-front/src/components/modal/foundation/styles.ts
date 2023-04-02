import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #000000b3;
  top: 0;
  padding: 0 16px;

  .modal {
    width: 100%;
    max-width: 400px;
    position: relative;
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    overflow: hidden;
    opacity: 1;
    animation: showUp 0.4s;

    .header {
      text-align: center;
      padding-top: 16px;

      button {
        position: absolute;
        right: 8px;
        top: 8px;
        background: transparent;
        opacity: 0.4;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
  }
`;

export const Form = styled.form`
  margin-top: 24px;
  min-height: 280px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
