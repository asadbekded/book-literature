import React from "react";
import {
  ButtonImg,
  DropItem,
  DropLink,
  HeaderContent,
  HeaderLink,
  ItemLink,
  ListItem,
  Navbar,
  NavButton,
  NavList,
} from "./Header.style";
import User from "../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { removeTokenAction } from "../../redux/token/tokenAction";
import { removeUserAction } from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const user = useSelector((state) => state.user.user);
  const theme = useSelector((state) => state.mode.theme);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate('/')
    dispatch(removeTokenAction(localStorage.removeItem("token")));
    dispatch(removeUserAction(JSON.parse(localStorage.removeItem("user"))));
  }

  return (
    <>
      <HeaderContent>
        <HeaderLink to="/">Badiiyat</HeaderLink>
        <Navbar>
          <NavList>
            <ListItem>
              <ItemLink active={theme ? '#fff' : '#0d0d0d'} color={theme ? '#717171' : '#b6b6b6'} to="/">Bosh sahifa</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink active={theme ? '#fff' : '#0d0d0d'} color={theme ? '#717171' : '#b6b6b6'} to="/books">Kitoblar</ItemLink>
            </ListItem>
            <NavButton className="dropdown">
              <ButtonImg
                aria-expanded="false"
                data-bs-toggle="dropdown"
                src={user?.image ? `http://localhost:5000/${user.image}` :  User }
                alt="user img"
                width="50"
                height="50"
              />
              <ul style={theme ? {backgroundColor: '#222'} : {backgroundColor:'#fff'}} className="dropdown-menu">
                <DropItem className="dropdown-item">
                  <DropLink color={theme ? '#C9AC8C' : '#000'} to='/profile'>Profile</DropLink>
                </DropItem>
                <DropItem className="dropdown-item">
                  <DropLink color={theme ? '#C9AC8C' : '#000'} to='/addAuthor'>Add author</DropLink>
                </DropItem>
                <DropItem className="dropdown-item">
                  <DropLink color={theme ? '#C9AC8C' : '#000'}  to='/addBook'>Add book</DropLink>
                </DropItem>
                <DropItem style={theme ? {color: '#C9AC8C'} : {color:'#000'}} onClick={handleLogOut} className="dropdown-item">
                  Log out
                </DropItem>
              </ul>
            </NavButton>
          </NavList>
        </Navbar>
      </HeaderContent>
    </>
  );
};
