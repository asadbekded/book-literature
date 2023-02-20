import React, { useState } from "react";
import {
  StyledBox,
  StyledImg,
  StyledItem,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./Books.Style.js";
import Before from "../../assets/images/card-before.svg";
import BeforeBottom from "../../assets/images/card-bottom.svg";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

export const BooksCard = ({ el }) => {
    const [auth, setAuth] = useState([]);

  const token = useSelector((state) => state.token.token);


  useEffect(() => {
     axios({
        method: "get",
        url: 'http://localhost:5000/author/authorId/' + el.author_id,
        headers: { Authorization: token, "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          if(res.status === 201){
            setAuth(res.data)
          }
        })
        .catch((err) => console.log(err));
  }, [el, token])


  return (
    <StyledLink key={el.id} to={`/books/${el.id}`}>
      <StyledItem image={BeforeBottom}>
        <StyledImg
          src={`http://localhost:5000/${el.image}`}
          alt="img"
          width={295}
          height={224}
        />
        <StyledBox image={Before}>
          <StyledTitle>{el.title}</StyledTitle>
          <StyledText>
            {auth.first_name} {auth.last_name} 
          </StyledText>
        </StyledBox>
      </StyledItem>
    </StyledLink>
  );
};
