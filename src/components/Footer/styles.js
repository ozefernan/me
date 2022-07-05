import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 2rem;

  p {
    font-size: 0.75rem;
  }
`;

export const Icons = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;

  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 3rem;

  svg:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
