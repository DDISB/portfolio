import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import styled from 'styled-components';
import Css from '@/assets/skills/css3.svg';
import Html from '@/assets/skills/html5.svg';
import Javascript from '@/assets/skills/javascript.svg';
import Typescript from '@/assets/skills/typescript.svg';
import ReactIcon from '@/assets/skills/react.svg';
import Svelte from '@/assets/skills/Svelte.svg';
import Postgresql from '@/assets/skills/postgresql.svg';
import Git from '@/assets/skills/git.svg';

const skills = [
  ['HTML', Html], ['CSS', Css], ['JavaScript', Javascript], ['TypeScript', Typescript],
  ['React', ReactIcon], ['Svelte', Svelte], ['Git', Git], ['PostgreSQL', Postgresql],
];

const Container = styled(AnimatedContainer)`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.5rem;
  @media (max-width: 800px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 430px) { grid-template-columns: 1fr; }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-height: 5rem;
  padding: 1rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  &:hover { transform: translateY(-3px); border-color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.surfaceElevated}; }
`;

const SkillImg = styled.img`width: 2.25rem; height: 2.25rem; object-fit: contain;`;

export default function Skills() {
  return (
    <Container>
      <h2>Мои навыки</h2>
      <Grid>{skills.map(([name, icon]) => <Skill key={name}><SkillImg src={icon} alt="" />{name}</Skill>)}</Grid>
    </Container>
  );
}
