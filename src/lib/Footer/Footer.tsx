import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: min(1120px, calc(100% - 2rem));
  margin: 2rem auto 0;
  padding: 2rem 0 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  font-weight: 600;
`;

export default function Footer() {
  return <FooterContainer><ContentContainer><P>© {new Date().getFullYear()} / Демид Самылов</P></ContentContainer></FooterContainer>;
}
