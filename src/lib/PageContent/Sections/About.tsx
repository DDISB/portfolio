import { AnimatedContainer, AnimatedLi } from "@/lib/animations/appearanceAnimation";
import styled from "styled-components";

const AboutContainer = styled(AnimatedContainer)`
  position: static;
  max-width: 1200px;
  width: 100%;
  min-height: 400px;
  margin: 0 auto;

  border-radius: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ul = styled.ul`  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 2rem;
`;

const Li = styled(AnimatedLi)`
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;

  font-weight: 600;
  transform: translateY(0);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 1000px) {
    height: max-content;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ColoredP = styled.p`
  color: ${({ theme }) => theme.colors.additional};
`

export default function() {
  const LiHover = {
      y: -4,
    }

  return (
    <AboutContainer>
      <h2>Обо мне</h2>
      <Ul>
        <Li whileHover={LiHover}>
          <ColoredP>&mdash; Общая информация</ColoredP>          
          <p>Я — веб-разработчик с 2 годами опыта, специализируюсь на TypeScript, React, Svelte, 
            API-интеграциях. Создаю быстрые, надежные и масштабируемые решения для бизнеса: 
            от лэндингов до сложных веб-приложений.
            Работаю прозрачно: от ТЗ до запуска вы будете понимать, как движется проект. 
            Готов не просто „написать код“, а решить вашу проблему.
          </p>
        </Li>

        <Li whileHover={LiHover}>
          <ColoredP>&mdash; Образование</ColoredP>
          <TextWrapper>
            <p>Вятский государственный университет - Информатика и вычислительная техника.</p>
            <p>2022-2026</p>
          </TextWrapper>
        </Li>

        <Li whileHover={LiHover}>
          <ColoredP>&mdash; Коммерческий опыт</ColoredP>  
          <TextWrapper>
            <p>В рамках работы в научно-исследовательской группы спроектировал и разработал
              веб-приложение для сбора и анализа производственных данных на 
              крупном промышленном предприятии.<br/>
              Технологии: SvelteKit, PostgreSQL, KeystoneJS, GIT, GraphQL.</p>
            <p>2024-2025</p>
          </TextWrapper>        
        </Li>
      </Ul>
    </AboutContainer>
  );
}