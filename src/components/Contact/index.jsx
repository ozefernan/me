import { Content, Container, HighlightTitle, Button } from "./styles";

export function Contact() {
  return (
    <Container>
      <Content>
        <HighlightTitle>Get In Touch</HighlightTitle>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <Button type='button'>Sey Hello!</Button>
      </Content>
    </Container>
  );
}
