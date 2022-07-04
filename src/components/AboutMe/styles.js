import styled from "styled-components";

export const Container = styled.header`
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  max-width: 1120px;
  height: calc(100vh - 5rem); // header height
  margin: 0 auto;
  padding: 5rem 2rem;
`;

export const DescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 1120px;
  height: calc(100vh - 114px);
  margin: 0 auto;
`;

export const HighlightTitle = styled.div`
  padding: 0 0 2rem;

  color: #918ef4;

  font-size: 1.5rem;
  font-family: "Press Start 2P";
  text-transform: uppercase;
`;

export const Text = styled.div`
  text-align: justify;

  br {
    margin-bottom: 10px;
  }
`;

export const TechList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 10rem;

  padding-top: 1.25rem;
`;

export const Tech = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: #ffffff;
  font-size: 0.75rem;
  font-weight: semi-bold;
`;

export const ImageContent = styled.div`
  position: relative;

  #recOne {
    position: absolute;
    bottom: 360px;
    right: -40px;
  }

  #recTwo {
    position: absolute;
    bottom: 230px;
    right: -15px;
  }

  #blobImage {
    position: absolute;
    bottom: 0;
    right: 50px;
  }

  #PhotoImage {
    position: absolute;
    bottom: 270px;
    right: 10px;

    width: 350px;
    height: 350px;
  }
`;
