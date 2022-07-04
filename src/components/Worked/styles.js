import styled, { css } from "styled-components";

export const Container = styled.header`
  position: relative;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem); // header height
  margin: 0 auto;
  padding: 5rem 0 5rem 2rem;
`;

export const HighlightTitle = styled.div`
  padding: 0 0 2rem;

  color: #918ef4;

  font-size: 1.5rem;
  font-family: "Press Start 2P";
  text-transform: uppercase;
`;

export const JobsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  max-width: 840px;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 3.5rem;
  padding: 0 1rem;

  border: none;
  background: none;
  color: #ffffff;

  font-family: "Rubik";
  font-weight: bold;
  text-align: left;

  transition: 0.4s;

  ${({ selected }) =>
    selected &&
    css`
      background: #161f2f;
    `}

  &:hover {
    ${({ selected }) =>
      !selected &&
      css`
        background: #0f1520;
      `}
  }
`;

export const JobContainer = styled.div`
  min-height: 250px;

  background: #161f2f;
  padding: 0.75rem 1rem;

  font-family: "Rubik";
`;

export const JobContent = styled.div`
  ${({ show }) =>
    show
      ? css`
          animation-name: contentTransition;
          animation-duration: 1250ms;
          animation-fill-mode: forwards;
        `
      : css`
          display: none;
        `}

  @keyframes contentTransition {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const JobTitle = styled.div`
  color: #ffffff;

  font-weight: bold;

  span {
    color: #918ef4;
  }
`;

export const JobPeriod = styled.div`
  color: #ffffff;
`;

export const JobDescription = styled.ul`
  padding-top: 1rem;

  list-style-type: none;

  li {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;

    &:not(:last-child) {
      padding-bottom: 1rem;
    }
  }
`;
