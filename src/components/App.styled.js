import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  padding: 0 25px 0 25px;
  min-height: 60px;
`;
export const Nav = styled.nav`
  width: 1200px;
`;
export const HeaderNavList = styled.ul`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const HeaderNavItem = styled.li``;
export const HeaderNavLink = styled(NavLink)`
  padding: 18px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  position: relative;

  &.active {
    color: orangered;
    &::after {
      display: inline-block;
      position: absolute;
      content: '';
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      border-radius: 2px;
      background-color: tomato;
    }
  }
`;
