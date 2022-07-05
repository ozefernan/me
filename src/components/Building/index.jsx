import { FiGithub } from "react-icons/fi";

import PortifolioImg from "../../assets/images/portifolio.png";

import {
  Content,
  Container,
  ProjectsList,
  HighlightTitle,
  ProjectDescription,
} from "./styles";

export function Building() {
  return (
    <Container>
      <Content>
        <HighlightTitle>some things i`ve built</HighlightTitle>
        <ProjectsList>
          <img src={PortifolioImg} alt='Portifolio' />
          <ProjectDescription>
            <h2>Portifolio</h2>
            <p>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm.
            </p>
            <span>
              <p>React - Styled Component</p>
              <FiGithub size={24} color='#918EF4' />
            </span>
          </ProjectDescription>
        </ProjectsList>
      </Content>
    </Container>
  );
}
