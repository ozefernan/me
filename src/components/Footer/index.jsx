import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <AiOutlineMail size={32} color='#918EF4' />
        <AiOutlineGithub size={32} color='#918EF4' />
        <AiOutlineLinkedin size={32} color='#918EF4' />
        <AiOutlineInstagram size={32} color='#918EF4' />
        <AiOutlineTwitter size={32} color='#918EF4' />
        <BsSpotify size={28} color='#918EF4' />
      </Content>
    </Container>
  );
}
