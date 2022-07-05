import styled, { css } from "styled-components";

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgb(23, 22, 22);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 0.4s linear;

  ${({ hide }) =>
    hide &&
    css`
      opacity: 0;
    `}
`;
