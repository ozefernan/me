import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem); // header height
  margin: 0 auto;
  padding: 5rem 0 5rem 2rem;

  img {
    max-width: 540px;

    filter: blur(5px);

    transition: 0.2s;

    &:hover {
      filter: none;
      transform: scale(1.1);
    }
  }
`;

export const HighlightTitle = styled.div`
  padding: 0 0 2rem;

  color: #918ef4;

  font-size: 1.5rem;
  font-family: "Press Start 2P";
  text-transform: uppercase;
`;

export const ProjectsList = styled.div`
  position: relative;

  padding: 3rem 5rem;
`;

export const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: -80px;
  right: 50px;

  width: 530px;
  height: 300px;
  padding: 3rem 2rem 2rem;

  color: #ffffff;
  background: rgba(20, 27, 66, 0.6);

  h2 {
    font-family: "Rubik";
    font-weight: bold;
    text-align: right;
    text-transform: uppercase;
  }

  p {
    text-align: justify;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.2s;

    svg:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
