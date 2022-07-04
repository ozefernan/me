import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

import Blob from "../../assets/svg/blob.svg";
import Profile from "../../assets/images/tempProfile.png";
import RectangleOne from "../../assets/svg/rectangleOne.svg";
import RectangleTwo from "../../assets/svg/rectangleTwo.svg";

import {
  Text,
  Tech,
  Content,
  TechList,
  Container,
  ImageContent,
  HighlightTitle,
  DescriptionContent,
} from "./styles";

export function AboutMe() {
  return (
    <Container>
      <Content>
        <DescriptionContent>
          <HighlightTitle>about me</HighlightTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin iaculis felis, id rutrum orci euismod ut. Curabitur eu
            turpis elementum, venenatis lectus et, iaculis urna. Vivamus ligula
            turpis, porta non sapien vitae, gravida viverra neque. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum vitae consectetur turpis.
            <br />
            <br />
            Sed et quam turpis. Phasellus sed nibh vel velit volutpat blandit ut
            eget ligula. Ut nec velit elit. Quisque ac lorem purus. Mauris
            hendrerit non erat ut iaculis.
            <br />
            <br />
            Nunc mollis euismod pretium. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </Text>

          <TechList>
            <Tech>
              <SiJavascript size={18} color='#F7DF1E' />
              JavaScript (ES6+)
            </Tech>
            <Tech>
              <SiTypescript size={18} color='#007ACC' />
              TypeScript
            </Tech>
            <Tech>
              <SiReact size={18} color='#00D8FF' />
              React
            </Tech>
            <Tech>
              <SiNodedotjs size={18} color='#539E43' />
              Node.js
            </Tech>
          </TechList>
        </DescriptionContent>

        <ImageContent>
          <img id='recOne' src={RectangleOne} alt='blob' />
          <img id='recTwo' src={RectangleTwo} alt='blob' />
          <img id='blobImage' src={Blob} alt='blob' />
          <img id='PhotoImage' src={Profile} alt='Profile' />
        </ImageContent>
      </Content>
    </Container>
  );
}
