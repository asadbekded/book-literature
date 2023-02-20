import React from "react";
import {
  ButtonImg,
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
              <ItemLink to="/">Bosh sahifa</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/books">Kitoblar</ItemLink>
            </ListItem>
            <NavButton className="dropdown">
              <ButtonImg
                aria-expanded="false"
                data-bs-toggle="dropdown"
                src={ user.image ? `http://localhost:5000/${user.image}` : User }
                alt="user img"
                width="50"
                height="50"
              />
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <DropLink to='/profile'>Profile</DropLink>
                </li>
                <li className="dropdown-item">
                  <DropLink to='/addAuthor'>Add author</DropLink>
                </li>
                <li className="dropdown-item">
                  <DropLink to='/addBook'>Add book</DropLink>
                </li>
                <li onClick={handleLogOut} className="dropdown-item">
                  Log out
                </li>
              </ul>
            </NavButton>
          </NavList>
        </Navbar>
      </HeaderContent>
    </>
  );
};
