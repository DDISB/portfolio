import { AnimatedLi } from '@/lib/animations/appearanceAnimation';
import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import styled from 'styled-components';
import brando from '@/img/brando.png';

const Container = styled(AnimatedContainer)`max-width: 1120px; width: 100%; margin: 0 auto;`;
const List = styled.ul`list-style: none; padding: 0; display: grid; gap: 1.5rem; margin-top: 2.5rem;`;
const Project = styled(AnimatedLi)`
  list-style: none; display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  gap: clamp(1.25rem, 4vw, 3rem); padding: clamp(1rem, 2.5vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.surface}; overflow: hidden; box-shadow: 0 20px 55px rgba(0, 0, 0, 0.07);
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.surfaceElevated}; }
  &:nth-child(even) > img { order: 2; }
  @media (max-width: 850px) { grid-template-columns: 1fr; &:nth-child(even) > img { order: 0; } }
`;
const Preview = styled.img`width: 100%; height: 100%; min-height: 320px; border-radius: 1rem; object-fit: cover; object-position: top; @media (max-width: 600px) { min-height: 210px; }`;
const Description = styled.div`display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: clamp(0.5rem, 2vw, 1rem);`;
const Label = styled.p`margin-bottom: 0.75rem; color: ${({ theme }) => theme.colors.primary}; font-size: 0.78rem; font-weight: 750; letter-spacing: 0.08em; text-transform: uppercase;`;
const Copy = styled.p`margin-top: 1rem;`;
const Links = styled.div`display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;`;
const LinkButton = styled.a`
  display: inline-flex; align-items: center; justify-content: center; min-width: 7rem; padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary}; border-radius: 999px; color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem; font-weight: 700; transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover { color: #fff; background: ${({ theme }) => theme.colors.primary}; transform: translateY(-2px); }
`;

const Tech = styled.p`margin-top: 1rem; font-size: 0.9rem;`;

interface ProjectCardProps { image: string; type: string; title: string; description: string; tech: string; github: string; demo: string; }
function ProjectCard({ image, type, title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <Project whileHover={{ y: -4 }}>
      <Preview src={image} alt={`Интерфейс проекта ${title}`} />
      <Description>
        <Label>{type}</Label><h3>{title}</h3><Copy>{description}</Copy>
        <Links><LinkButton href={github} target="_blank" rel="noreferrer">GitHub</LinkButton><LinkButton href={demo} target="_blank" rel="noreferrer">Демо</LinkButton></Links>
        <Tech><strong>Технологии:</strong> {tech}</Tech>
      </Description>
    </Project>
  );
}

export default function Works() {
  return (
    <Container>
      <h2>Мои работы</h2>
      <List>
        <ProjectCard image={brando} type="Веб-приложение" title="Brando" description="Платформа с заданиями от партнёров, системой очков, уровнями, картой бонусов и магазином призов." tech="React, TypeScript, адаптивная вёрстка, GitHub Pages" github="https://github.com/DDISB/Stainless-Hackathon/" demo="https://ddisb.github.io/Stainless-Hackathon/" />
        {/* <ProjectCard image={boldo} type="Одностраничный лендинг" title="Boldo" description="Адаптивная промостраница в строгом стиле, созданная на HTML, CSS и JavaScript." tech="HTML, CSS, JavaScript, адаптивная вёрстка" github="https://github.com/DDISB/Boldo.github.io" demo="https://ddisb.github.io/Boldo.github.io/" /> */}
      </List>
    </Container>
  );
}
