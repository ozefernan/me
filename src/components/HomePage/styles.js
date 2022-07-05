import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  max-width: 1120px;
  height: calc(100vh - 5rem);
  margin: 0 auto;
  padding-top: 82px;
  padding: 5rem 2rem;
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

export const Scroll = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 60px;

  width: 100%;

  animation: updown 2s ease infinite;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &.hide {
    opacity: 0;
  }

  @keyframes updown {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 10px);
    }
    to {
      transform: translate(0, -0px);
    }
  }
`;
