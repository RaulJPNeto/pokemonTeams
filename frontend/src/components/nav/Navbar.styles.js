// components/nav/Navbar.styles.js

import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #3b4cca;
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const HamburgerMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const HamburgerDropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const HamburgerMenuItem = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const UserMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffcb05;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 150px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const MenuItem = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
