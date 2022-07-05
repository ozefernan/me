import { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";

import {
  Title,
  Scroll,
  Content,
  SubTitle,
  Container,
  Description,
  HighlightTitle,
} from "./styles";

function useScrollInTop() {
  const [inTop, setInTop] = useState("top");

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (scrollY === 0) {
        setInTop("top");
        return;
      }
      setInTop(null);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [inTop]);

  return inTop;
}

export function HomePage() {
  return (
    <Container>
      <Content>
        <HighlightTitle>hi, my name is</HighlightTitle>
        <Title>Oséas Fernandes,</Title>
        <SubTitle>i’m web developer!</SubTitle>
        <Description>
          I am a Software Engineer with a focus on Web development, with 3 years
          of experience and an eternal learner of technology.
        </Description>

        <Scroll className={`${useScrollInTop() !== "top" ? "hide" : ""}`}>
          <BsArrowDown size={24} />
        </Scroll>
      </Content>
    </Container>
  );
}
