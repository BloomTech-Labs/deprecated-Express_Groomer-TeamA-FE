import styled from 'styled-components';

const Title = styled.h1`
  padding: 0;
  font-size: 2.5rem;
  color: #ffffff;
`;

const Nav = styled.nav`
  width: 100%;
<<<<<<< HEAD
  border-bottom: 2px solid #bababa;
=======
  border-bottom: 2px solid #BABABA;
>>>>>>> fa0f362a74ca69a4698927191a601482bf11f7e7
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #006161;
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

    &:hover {
      color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  background-color: #ffffff;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25 rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
  &:nth child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    justify-content: center;
  }
`;

export { Title, Nav, NavLinks, Burger };
