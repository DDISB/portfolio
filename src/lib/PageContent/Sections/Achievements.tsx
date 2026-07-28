import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import hackathon from '@/img/hackathon.jpg';
import styled from 'styled-components';

const Container = styled(AnimatedContainer)`
  width: 100%; max-width: 1120px; margin: 0 auto;
`;
const Card = styled.article`
  display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: clamp(1.25rem, 4vw, 3rem); margin-top: 2.5rem; padding: clamp(1rem, 2.5vw, 1.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.surface}; overflow: hidden;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.surfaceElevated}; transform: translateY(-3px); }
  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;
const Image = styled.img`
  width: 100%; height: 100%; min-height: 300px; border-radius: 1rem; object-fit: cover;
  @media (max-width: 600px) { min-height: 210px; }
`;
const Content = styled.div`
  display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
  padding: clamp(0.5rem, 2vw, 1rem);
`;
const Tag = styled.span`
  display: inline-flex; margin-bottom: 0.75rem; padding: 0.2rem 0.55rem; border-radius: 999px;
  color: ${({ theme }) => theme.colors.muted};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.muted} 12%, transparent);
  font-size: 0.72rem; font-weight: 600;
`;
const Description = styled.p`margin-top: 1rem;`;
const GitHubLink = styled.a`
  display: inline-flex; align-items: center; justify-content: center; margin-top: 1.5rem; padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary}; border-radius: 999px;
  color: ${({ theme }) => theme.colors.text}; font-size: 0.9rem; font-weight: 700; text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  &:hover { color: #fff; background: ${({ theme }) => theme.colors.primary}; transform: translateY(-2px); }
`;

export default function Achievements() {
  return (
    <Container>
      <h2>Достижения</h2>
      <Card>
        <Image src={hackathon} alt="Участники хакатона" />
        <Content>
          <Tag>Хакатон</Tag>
          <h3>FeHackathon</h3>
          <Description>Победа на хакатане Железно-Философт в октябре 2025 в зачете "Приз зрительских симпатий".</Description>
          <GitHubLink href="https://github.com/DDISB/FeHackathon" target="_blank" rel="noreferrer">
            Побробнее о проекте на GitHub
          </GitHubLink>
        </Content>
      </Card>
    </Container>
  );
}   