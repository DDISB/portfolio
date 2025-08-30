import { AnimatedContainer } from "@/lib/animations/AnimatedContainer";
import styled, { useTheme } from "styled-components";
import Css from "@/assets/skills/css3.svg"
import Html from "@/assets/skills/html5.svg"
import Javascript from "@/assets/skills/javascript.svg"
import Typescript from "@/assets/skills/typescript.svg"
import React from "@/assets/skills/react.svg"
import Svelte from "@/assets/skills/Svelte.svg"
import Postgresql from "@/assets/skills/postgresql.svg"
import Git from "@/assets/skills/git.svg"
import SkillsLight from "@/assets/skillsLight.svg"
import SkillsDark from "@/assets/skillsDark.svg"

const SkillsContainer = styled(AnimatedContainer)`
  position: static;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsWrapper = styled.div`
  width: 100%;

  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const SkillWrapper = styled.div`
  margin-top: 1rem;  
  max-height: 4rem;
  width: max-content;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;;
  font-weight: 700;
`;

const SkillImg = styled.img`
  height: 2.5rem;
`;

const HeaderImg = styled.img`
  height: 3rem;
  margin-top: 5px;
  @media (max-width: 600px) {
    height: 2rem;
    margin-top: 0;
  }
`;

export default function() {
  const theme = useTheme();

  return (
    <SkillsContainer>
      <h2>
        <HeaderImg src={theme.themeName === 'light' ? SkillsLight : SkillsDark } alt="" /> Мои навыки
      </h2>

      <SkillsWrapper>
        <SkillWrapper>
          <SkillImg src={Html} alt="Html"></SkillImg>
          HTML
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={Css} alt="Css"></SkillImg>
          CSS
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={Javascript} alt="Javascript"></SkillImg>
          JavaScript
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={Typescript} alt="Typescript"></SkillImg>
          TypeScript
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={React} alt="React"></SkillImg>
          Rect
        </SkillWrapper>
        
        <SkillWrapper>
          <SkillImg src={Svelte} alt="Svelte"></SkillImg>
          Svelte
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={Git} alt="Git"></SkillImg>
          Git
        </SkillWrapper>

        <SkillWrapper>
          <SkillImg src={Postgresql} alt="Postgresql"></SkillImg>
          Postgresql
        </SkillWrapper>
      </SkillsWrapper>

    </SkillsContainer>
  );
}