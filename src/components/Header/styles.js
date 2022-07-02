import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0px;

  height: 5rem;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  z-index: 1;

  &.hide {
    top: -5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalHr = styled.div`
  width: 1px;
  height: 50px;
  margin-left: 1rem;

  background: #ffffff;
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
`;
