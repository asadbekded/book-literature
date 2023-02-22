import React from "react";
import {
  StyledBox,
  StyledImg,
  StyledItem,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./Card.style";
import Before from "../../assets/images/card-before.svg";
import BeforeBottom from "../../assets/images/card-bottom.svg";
import { useSelector } from "react-redux";

export const Card = ({ el }) => {

  const theme = useSelector((state) => state.mode.theme);

  return (
    <StyledLink key={el.id} to={`/${el.id}`}>
      <StyledItem color={theme ? '#333' : '#f5f5f5'} image={BeforeBottom}>
        <StyledImg
          src={`http://localhost:5000/${el.image}`}
          alt="img"
          width={295}
          height={224}
        />
        <StyledBox image={Before}>
          <StyledTitle color={theme ? '#C9AC8C' : '#333'} >
            {el.first_name} {el.last_name}
          </StyledTitle>
          <StyledText color={theme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'} >
            {el.date_of_birth}-{el.date_of_death}
          </StyledText>
        </StyledBox>
      </StyledItem>
    </StyledLink>
  );
};
