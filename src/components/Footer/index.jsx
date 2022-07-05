import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

import { Container, Content, Icons } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <p>Designed & Built by Oséas Fernandes</p>

        <Icons>
          <AiOutlineMail size={28} color='#918EF4' />
          <AiOutlineGithub size={28} color='#918EF4' />
          <AiOutlineLinkedin size={28} color='#918EF4' />
          <AiOutlineInstagram size={28} color='#918EF4' />
          <AiOutlineTwitter size={28} color='#918EF4' />
          <BsSpotify size={24} color='#918EF4' />
        </Icons>
      </Content>
    </Container>
  );
}
