import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import boldo from '@/img/boldo.png';
import viewer3d from '@/img/3dviewer.png';
import diploma from '@/img/diplomav2.png';
import stainlesshackathon from '@/img/stainlesshackathon.png';

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
  position: relative; display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding: 0.75rem 4rem 1.5rem 1.5rem;
  cursor: pointer; list-style: none; &::-webkit-details-marker { display: none; }
  &::after {
    content: '+'; position: absolute; right: 1.5rem; top: 0; bottom: 0;
    display: flex; align-items: center; line-height: 1;
    color: ${({ theme }) => theme.colors.primary}; font-size: 1.7rem; font-weight: 400;
  }
  details[open] &::after { content: '−'; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const StaticDetails = styled.article`
  margin-top: 1rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.surface}; overflow: hidden; transition: borde r-color 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
`;
const StaticSummary = styled.div`
  display: grid; grid-template-columns: 1fr auto; gap: 1rem; padding: 0.75rem 1.5rem 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
const DetailTag = styled.span`
  display: inline-flex; width: fit-content; margin-bottom: 0.55rem; padding: 0.2rem 0.55rem;
  border-radius: 999px; color: ${({ theme }) => theme.colors.muted};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.muted} 12%, transparent);
  font-size: 0.72rem; font-weight: 600; letter-spacing: 0.01em; line-height: 1.35;
`;
const SummaryTitle = styled.h3`font-size: 1.3rem; letter-spacing: -0.02em;`;
const Period = styled.p`align-self: center; white-space: nowrap; color: ${({ theme }) => theme.colors.primary}; font-weight: 700;`;
const DetailContent = styled.div`padding: 0 1.5rem 1.5rem; border-top: 1px solid ${({ theme }) => theme.colors.border};`;
const Subheading = styled.h4`margin-top: 1.5rem; color: ${({ theme }) => theme.colors.text}; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase;`;
const Skills = styled.ul`display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.8rem; list-style: none;`;
const Skill = styled.li`padding: 0.45rem 0.75rem; border-radius: 999px; color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.accentSoft}; font-size: 0.85rem; font-weight: 700;`;
const ProjectList = styled.ul`display: grid; gap: 1rem; margin-top: 1rem; padding: 0; list-style: none;`;
const StudyProject = styled.li`
  display: grid; grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr); gap: 1.25rem; align-items: center;
  padding: 1rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1rem;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  @media (max-width: 650px) { grid-template-columns: 1fr; } 
`;
const ScreenshotButton = styled.button`
  display: block; width: 100%; padding: 0; border: 0; border-radius: 0.8rem; background: none;
  @media (min-width: 651px) { cursor: zoom-in; }
`;
const Screenshot = styled.img`display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 0.8rem;`;
const Lightbox = styled.div`
  position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 2rem;
  background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(8px); cursor: zoom-out;
  @media (max-width: 650px) { display: none; }
`;
const LightboxImage = styled.img`
  display: block; max-width: min(1400px, 94vw); max-height: 90vh; object-fit: contain;
  border-radius: 0.8rem; box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45); cursor: default;
`;
const CloseLightbox = styled.button`
  position: fixed; top: 1.25rem; right: 1.25rem; display: grid; place-items: center;
  width: 2.75rem; height: 2.75rem; border: 1px solid rgba(255, 255, 255, 0.25); border-radius: 50%;
  color: #fff; background: rgba(255, 255, 255, 0.1); font-size: 1.5rem; line-height: 1; cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover { background: rgba(255, 255, 255, 0.2); transform: scale(1.05); }
`;
const ProjectInfo = styled.div`display: flex; flex-direction: column; align-self: stretch; gap: 0.55rem; padding-top: 0.2rem;`;
const ProjectTitle = styled.div`color: ${({ theme }) => theme.colors.text}; font-size: clamp(1.15rem, 2vw, 1.35rem); line-height: 1.25; font-weight: 750;`;
const ProjectLinks = styled.div`display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: auto; padding-top: 0.75rem;`;
const ProjectLink = styled.a`
  display: inline-flex; align-items: center; justify-content: center; width: 9rem; padding: 0.65rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text}; font-size: 0.85rem; font-weight: 700; text-decoration: none;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.surfaceElevated}; transform: translateY(-2px); }
  @media (max-width: 650px) { width: 7rem; }
`;

export default function About() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImage = (src: string, alt: string) => {
    if (window.matchMedia('(min-width: 651px)').matches) setSelectedImage({ src, alt });
  };

  useEffect(() => {
    if (!selectedImage) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <>
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
          <Summary><div><DetailTag>Образование</DetailTag><SummaryTitle>Вятский государственный университет</SummaryTitle><p>Бакалавриат: Информатика и вычислительная техника</p></div><Period>2022–2026</Period></Summary>
          <DetailContent>
            <Subheading>Полученные навыки</Subheading><Skills>{['Алгоритмы и структуры данных', 'Базы данных', 'Проектирование ПО', 'Веб-разработка', 'Разработка прикладного ПО', 'Проектирование цифровых устройств', 'Командная работа', 'Git'].map(skill => <Skill key={skill}>{skill}</Skill>)}</Skills>
            <Subheading>Учебные и командные проекты</Subheading>
            <ProjectList>
              <StudyProject>
                <ScreenshotButton type="button" onClick={() => openImage(diploma, 'Скриншот дипломный проект')} aria-label="Увеличить изображение: Скриншот дипломный проект"><Screenshot src={diploma} alt="Скриншот дипломный проект" /></ScreenshotButton>
                  <ProjectInfo><ProjectTitle>Дипломный проект - 2024-2025</ProjectTitle><p>Тема диплома: Разработка системы управления рецептурой продукта химического производства.</p></ProjectInfo>
              </StudyProject>

              <StudyProject>
                <ScreenshotButton type="button" onClick={() => openImage(stainlesshackathon, 'Скриншот хакатон 2025 Stainless')} aria-label="Увеличить изображение: Скриншот хакатон 2025 Stainless"><Screenshot src={stainlesshackathon} alt="Скриншот хакатон 2025 Stainless" /></ScreenshotButton>
                  <ProjectInfo><ProjectTitle>Brando - 2025</ProjectTitle><p>Командный проект разработанный командой Stainless в качестве решения для хакатона Железно - май 2025.</p><ProjectLinks><ProjectLink href="https://ddisb.github.io/Stainless-Hackathon/" target="_blank" rel="noreferrer">Демо</ProjectLink><ProjectLink href="https://github.com/DDISB/Stainless-Hackathon" target="_blank" rel="noreferrer">GitHub</ProjectLink></ProjectLinks></ProjectInfo>
              </StudyProject>

              <StudyProject>
                <ScreenshotButton type="button" onClick={() => openImage(viewer3d, 'Скриншот проекта 3д просмотр')} aria-label="Увеличить изображение: Скриншот проекта 3д просмотр"><Screenshot src={viewer3d} alt="Скриншот проекта 3д просмотр" /></ScreenshotButton>
                  <ProjectInfo><ProjectTitle>Собственный движок растеризации 3D-графики - 2023</ProjectTitle><p>Разработка рограммного 3D-рендерера и графической библиотеки с нуля. Реализованы загрузка полигональных моделей, проекции и преобразования, растеризация треугольников, расчёт освещения и удаление невидимых поверхностей с помощью Z-буфера.</p></ProjectInfo>
              </StudyProject>
              
              <StudyProject>
                <ScreenshotButton type="button" onClick={() => openImage(boldo, 'Скриншот проекта лендинг')} aria-label="Увеличить изображение: Скриншот проекта лендинг"><Screenshot src={boldo} alt="Скриншот проекта лендинг" /></ScreenshotButton>
                <ProjectInfo><ProjectTitle>Лендинг - 2022</ProjectTitle><p>Адаптивный одностраничный сайт, созданный для практики семантической вёрстки, CSS и клиентского JavaScript.</p><ProjectLinks><ProjectLink href="https://ddisb.github.io/Boldo.github.io/" target="_blank" rel="noreferrer">Демо</ProjectLink></ProjectLinks></ProjectInfo>
              </StudyProject>
            </ProjectList>
          </DetailContent>
        </Details>

        <StaticDetails>
          <StaticSummary>
            <div>
              <DetailTag>Образование</DetailTag>
              <SummaryTitle>Диплом о профессиональной переподготовке</SummaryTitle>
              <p>Разработка прикладных решений с применением искусственного инетллекта</p>
            </div>
            <Period>2026</Period>
          </StaticSummary>
        </StaticDetails>

        <StaticDetails>
          <StaticSummary>
            <div>
              <DetailTag>Работа</DetailTag>
              <SummaryTitle>Научно-исследовательская деятельность</SummaryTitle>
              <p>Лаборант-исследователь. Временный научный коллектив в целях реализации научного проекта Проектирование и оптимизация нейронной сети для решения прямой задачи в отношении входных параметров и выходных характеристик резиновых смесей и резин</p>
            </div>
            <Period>2024-2025</Period>
          </StaticSummary>
        </StaticDetails>

        <StaticDetails>
          <StaticSummary>
            <div>
              <DetailTag>Работа</DetailTag>
              <SummaryTitle>Ведущий инженер</SummaryTitle>
              <p>КОГБУ Центр стратегического развития информационных ресурсов и систем управления</p>
            </div>
            <Period>2026</Period>
          </StaticSummary>
        </StaticDetails>
      </Block>
      </Container>
      {selectedImage && createPortal(
        <Lightbox role="dialog" aria-modal="true" aria-label="Увеличенный просмотр изображения" onClick={() => setSelectedImage(null)}>
          <CloseLightbox type="button" onClick={() => setSelectedImage(null)} aria-label="Закрыть">×</CloseLightbox>
          <LightboxImage src={selectedImage.src} alt={selectedImage.alt} onClick={event => event.stopPropagation()} />
        </Lightbox>,
        document.body,
      )}
    </>
  );
}
