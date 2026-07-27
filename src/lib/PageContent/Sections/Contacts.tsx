import { AnimatedLi } from '@/lib/animations/appearanceAnimation';
import { AnimatedContainer } from '@/lib/animations/AnimatedContainer';
import styled from 'styled-components';
import githubSvg from '@/assets/github.svg';
import telegramSvg from '@/assets/telegram.svg';
import mailSvg from '@/assets/mail.svg';
import { useState } from 'react';

const Container = styled(AnimatedContainer)`max-width: 800px; width: 100%; margin: 0 auto;`;
const List = styled.ul`list-style: none; padding: 0; display: grid; gap: 0.9rem; margin-top: 2.5rem;`;
const Item = styled(AnimatedLi)`
  list-style: none;
  min-height: 5.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: border-color 0.2s ease, background 0.2s ease;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; background: ${({ theme }) => theme.colors.surfaceElevated}; }
`;
const ContactContent = styled.a`
  width: 100%; min-height: 5.25rem; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 1rem;
`;
const EmailButton = styled.button`
  width: 100%; min-height: 5.25rem; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 1rem; text-align: left;
`;
const Icon = styled.img`width: 3rem; height: 3rem; padding: 0.3rem; border: 1px solid ${({ theme }) => theme.colors.border}; border-radius: 0.8rem; background: #fff;`;
const Text = styled.div`min-width: 0; flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 1rem; p:last-child { overflow-wrap: anywhere; } @media (max-width: 500px) { p:first-child { display: none; } }`;
const Status = styled.span`color: ${({ theme }) => theme.colors.primary}; font-size: 0.78rem; font-weight: 750;`;

export default function Contacts() {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText('demidsamylov@gmail.com'); setIsCopied(true); window.setTimeout(() => setIsCopied(false), 2000); }
    catch (error) { console.error('Ошибка копирования:', error); }
  };
  return (
    <Container>
      <h2>Мои контакты</h2>
      <List>
        <Item whileHover={{ y: -3 }}><ContactContent href="https://github.com/DDISB" target="_blank" rel="noreferrer"><Icon src={githubSvg} alt="" /><Text><p>GitHub</p><p>github.com/DDISB</p></Text></ContactContent></Item>
        <Item whileHover={{ y: -3 }}><ContactContent href="https://t.me/DemidSamylov" target="_blank" rel="noreferrer"><Icon src={telegramSvg} alt="" /><Text><p>Telegram</p><p>t.me/DemidSamylov</p></Text></ContactContent></Item>
        <Item whileHover={{ y: -3 }}><EmailButton onClick={handleCopy} aria-label="Скопировать адрес электронной почты"><Icon src={mailSvg} alt="" /><Text><p>Почта</p><p>demidsamylov@gmail.com</p></Text>{isCopied && <Status>Скопировано</Status>}</EmailButton></Item>
      </List>
    </Container>
  );
}
