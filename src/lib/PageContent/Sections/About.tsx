import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import styled from 'styled-components';
import brando from '@/img/brando.png';
import boldo from '@/img/boldo.png';

const Container = styled(AnimatedContainer)`max-width: 1120px; width: 100%; margin: 0 auto;`;
const Block = styled.div`margin-top: clamp(4rem, 8vw, 7rem); &:first-of-type { margin-top: 2.5rem; }`;
const Intro = styled.p`max-width: 760px; margin: 1rem auto 0; text-align: center; font-size: 1.1rem;`;
const Grid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; @media (max-width: 760px) { grid-template-columns: 1fr; }`;
const Achievement = styled.article`
  padding: 1.5rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.surface}; transition: border-color 0.2s ease, transform 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; transform: translateY(-3px); }
`;
const AchievementTitle = styled.h3`margin: 1rem 0 0.5rem; font-size: 1.15rem; letter-spacing: -0.02em;`;
const Details = styled.details`
  margin-top: 1rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.surface}; overflow: hidden; transition: border-color 0.2s ease;
  &:hover, &[open] { border-color: ${({ theme }) => theme.colors.primary}; }
`;
const Summary = styled.summary`
  position: relative; display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding: 1.5rem 4rem 1.5rem 1.5rem;
  cursor: pointer; list-style: none; &::-webkit-details-marker { display: none; }
  &::after { content: '+'; position: absolute; right: 1.5rem; top: 50%; translate: 0 -50%; color: ${({ theme }) => theme.colors.primary}; font-size: 1.7rem; font-weight: 400; }
  details[open] &::after { content: '−'; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const SummaryTitle = styled.h3`font-size: 1.3rem; letter-spacing: -0.02em;`;
const Period = styled.p`white-space: nowrap; color: ${({ theme }) => theme.colors.primary}; font-weight: 700;`;
const DetailContent = styled.div`padding: 0 1.5rem 1.5rem; border-top: 1px solid ${({ theme }) => theme.colors.border};`;
const Subheading = styled.h4`margin-top: 1.5rem; color: ${({ theme }) => theme.colors.text}; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;`;
const Skills = styled.ul`display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.8rem; list-style: none;`;
const Skill = styled.li`padding: 0.45rem 0.75rem; border-radius: 999px; color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.accentSoft}; font-size: 0.85rem; font-weight: 700;`;
const Tasks = styled.ul`display: grid; gap: 0.6rem; margin-top: 0.8rem; padding-left: 1.2rem; color: ${({ theme }) => theme.colors.muted};`;
const ProjectList = styled.ul`display: grid; gap: 1rem; margin-top: 1rem; padding: 0; list-style: none;`;
const StudyProject = styled.li`
  display: grid; grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr); gap: 1.25rem; align-items: center;
  padding: 1rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1rem;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  @media (max-width: 650px) { grid-template-columns: 1fr; }
`;
const Screenshot = styled.img`width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 0.8rem;`;
const ProjectInfo = styled.div`display: flex; flex-direction: column; gap: 0.55rem;`;
const ProjectTitle = styled.h4`color: ${({ theme }) => theme.colors.text}; font-size: 1.15rem; font-weight: 750;`;

export default function About() {
  return (
    <Container>
      <h2>Обо мне</h2>
      <Intro>Специализируюсь на backend-разработке: проектирую API, серверную логику и работу с данными. Понимание frontend помогает мне видеть продукт целиком и эффективнее взаимодействовать с клиентской частью.</Intro>
      <Block>
        <h2>Чем я могу быть полезен</h2>
        <Grid>
          <Achievement><AchievementTitle>Backend-сервисы</AchievementTitle><p>Разрабатываю серверную логику на Python и FastAPI, разделяя приложение на понятные и поддерживаемые компоненты.</p></Achievement>
          <Achievement><AchievementTitle>API и данные</AchievementTitle><p>Проектирую API, интегрирую внешние сервисы и организую надёжную работу приложения с базами данных.</p></Achievement>
          <Achievement><AchievementTitle>Задача целиком</AchievementTitle><p>Погружаюсь в бизнес-контекст, предлагаю техническое решение и последовательно довожу его до работающего продукта.</p></Achievement>
        </Grid>
      </Block>
      <Block>
        <h2>Образование и работа</h2>
        <Details>
          <Summary><div><SummaryTitle>Вятский государственный университет</SummaryTitle><p>Бакалавриат: Информатика и вычислительная техника</p></div><Period>2022–2026</Period></Summary>
          <DetailContent>
            <Subheading>Полученные навыки</Subheading><Skills>{['Алгоритмы и структуры данных', 'Базы данных', 'Проектирование ПО', 'Веб-разработка', 'Разработка прикладного ПО', 'Проектирование цифровых устройств', 'Командная работа', 'Git'].map(skill => <Skill key={skill}>{skill}</Skill>)}</Skills>
            <Subheading>Учебные и командные проекты</Subheading>
            <ProjectList>
              <StudyProject>
                <Screenshot src={brando} alt="Скриншот проекта Brando" />
                <ProjectInfo><ProjectTitle>Brando</ProjectTitle><p>Командное веб-приложение с заданиями от партнёров, системой очков, уровнями пользователей и каталогом наград.</p></ProjectInfo>
              </StudyProject>
              <StudyProject>
                <Screenshot src={boldo} alt="Скриншот проекта Boldo" />
                <ProjectInfo><ProjectTitle>Boldo</ProjectTitle><p>Адаптивный одностраничный сайт, созданный для практики семантической вёрстки, CSS и клиентского JavaScript.</p></ProjectInfo>
              </StudyProject>
            </ProjectList>
          </DetailContent>
        </Details>
        <Details>
          <Summary><div><SummaryTitle>Научно-исследовательская группа</SummaryTitle><p>Веб-разработчик</p></div><Period>2024–2025</Period></Summary>
          <DetailContent><Subheading>Задачи и вклад</Subheading><Tasks><li>Проектирование интерфейсов системы сбора производственных данных.</li><li>Разработка приложения на SvelteKit и интеграция с GraphQL API.</li><li>Работа с PostgreSQL и KeystoneJS.</li><li>Подготовка интерфейсов анализа данных для сотрудников предприятия.</li></Tasks></DetailContent>
        </Details>
      </Block>
    </Container>
  );
}