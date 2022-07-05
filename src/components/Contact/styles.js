import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1120px;
  height: calc(80vh - 5rem); // header height
  margin: 0 auto;
  padding: 5rem 0;

  p {
    max-width: 500px;
    padding-bottom: 5rem;

    text-align: center;
  }
`;

export const HighlightTitle = styled.div`
  padding: 0 0 2rem;

  color: #918ef4;

  font-size: 1.5rem;
  font-family: "Press Start 2P";
  text-transform: uppercase;
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0 3rem;

  color: #ffffff;
  border: 1px solid #918ef4;
  background: transparent;
  border-radius: 4px;

  font-weight: bold;

  transition: 0.4s;

  &:hover {
    background: #918ef4;
  }
`;
