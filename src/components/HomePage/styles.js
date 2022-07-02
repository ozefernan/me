import styled from "styled-components";

export const Container = styled.header`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 1120px;
  height: calc(100vh - 114px);
  margin: 0 auto;
  padding-top: 82px;
  padding: 5.125rem 2rem 5rem;
`;

export const HighlightTitle = styled.div`
  color: #918ef4;

  font-size: 1.5rem;
  font-family: "Press Start 2P";
`;

export const Title = styled.div`
  color: #ffffff;

  font-size: 4.25rem;
  font-family: "Rubik";
  font-weight: bold;
`;

export const SubTitle = styled.div`
  color: #7f7f7f;

  font-size: 3.25rem;
  font-family: "Rubik";
  font-weight: semi-bold;
`;

export const Description = styled.div`
  max-width: 510px;

  font-size: 1.25rem;
`;
