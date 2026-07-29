import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import styled from 'styled-components';

const IntroContainer = styled(AnimatedContainer)`
  min-height: min(860px, 100vh);
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 6rem);
  @media (max-width: 760px) { grid-template-columns: 1fr; min-height: auto; padding-top: 5rem; }
`;
const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 760px) {
    align-items: center;
    text-align: center;
  }
`;
const Eyebrow = styled.p`
  display: inline-flex; align-items: center; gap: 0.65rem; color: ${({ theme }) => theme.colors.primary};
  font-size: 0.85rem; font-weight: 750; letter-spacing: 0.12em; text-transform: uppercase;
  &::before { content: ''; width: 2rem; height: 2px; background: currentColor; }
`;
const Title = styled.h1`max-width: 780px;`;
const Portrait = styled.div`
  aspect-ratio: 4 / 5;
  width: min(100%, 340px);
  justify-self: end;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.1);
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.08em;
  overflow: hidden;
  position: relative;
  &::after { content: 'Фото'; position: absolute; right: 1rem; bottom: 1rem; padding: 0.35rem 0.65rem; border-radius: 999px; background: ${({ theme }) => theme.colors.accentSoft}; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; }
  @media (max-width: 760px) { justify-self: center; width: min(75%, 300px); }
`;

export default function Intro() {
  return (
    <IntroContainer>
      <Copy>
        <Eyebrow>Backend-разработчик</Eyebrow>
        <Title>Привет, я Демид Самылов</Title>
      </Copy>
      <Portrait aria-label="Место для фотографии Демида Самылова">ДС</Portrait>
    </IntroContainer>
  );
}
