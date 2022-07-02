import {
  Title,
  Content,
  SubTitle,
  Container,
  Description,
  HighlightTitle,
} from "./styles";

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
      </Content>
    </Container>
  );
}
