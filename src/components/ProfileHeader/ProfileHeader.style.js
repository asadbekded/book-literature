import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProfileHead = styled.header``;

export const ProfileList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const ProfileLink = styled(NavLink)`
  width: 100%;
  max-width: 400px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  text-decoration: none;
  padding: 23px 0px 23px 23px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.hover};
  &:hover {
    color: ${(props) => props.hover};
  }
  &.active {
    color: ${(props) => props.active};
    background-color: ${(props) => props.just};
    border-radius: 4px;
  }
  &.active span {
    color: #fff;
    background-color: #152540;
    border-radius: 4px;
  }
`;

export const ProfileItem = styled.li``;

export const ProfileSpan = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3699ff;
  padding: 6px 15px;
  background-color: #e5eaee;
  border-radius: 4px;
  margin-right: 8px;
`;
