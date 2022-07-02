import { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { LogoIcon } from "../../assets/icons/logo";

import {
  Container,
  Content,
  IconContent,
  MenuButton,
  VerticalHr,
} from "./styles";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export function Header() {
  return (
    <Container
      className={`${useScrollDirection() === "down" ? "hide" : "show"}`}
    >
      <Content>
        <IconContent>
          <LogoIcon />
          <VerticalHr />
        </IconContent>

        <MenuButton type='button'>
          <CgMenuRight size={32} color='#918EF4' />
        </MenuButton>
      </Content>
    </Container>
  );
}
