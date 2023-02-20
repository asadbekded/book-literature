import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0px 32px 0px;
`;
export const HeaderLink = styled(Link)`
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  text-decoration: none;
  color: #d1b89d;
  &:hover {
    color: #d1b89d;
  }
`;

export const Navbar = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const ListItem = styled.li`
  margin-right: 42px;
`;

export const ItemLink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 144.4%;
  text-decoration: none;
  color: #b6b6b6;
  &.active {
    color: #0d0d0d;
  }
  &:hover {
    color: #0d0d0d;
  }
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ButtonImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const DropLink = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;
