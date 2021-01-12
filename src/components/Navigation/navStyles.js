import styled from 'styled-components';

const Title = styled.h1`
  padding: 0;
  font-size: 2.5rem;
  color: #ffffff;
`;

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #1e90ff;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 30%;

  .nav-links {
    text-decoration: none;
    color: #ffffff;

    &::hover {
      color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    padding: 2%;
  }
`;

export { Title, Nav, NavLinks };
