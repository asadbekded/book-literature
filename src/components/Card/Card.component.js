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

export const Card = ({ el }) => {
  return (
    <StyledLink key={el.id} to={`/${el.id}`}>
      <StyledItem image={BeforeBottom}>
        <StyledImg
          src={`http://localhost:5000/${el.image}`}
          alt="img"
          width={295}
          height={224}
        />
        <StyledBox image={Before}>
          <StyledTitle>
            {el.first_name} {el.last_name}
          </StyledTitle>
          <StyledText>
            {el.date_of_birth}-{el.date_of_death}
          </StyledText>
        </StyledBox>
      </StyledItem>
    </StyledLink>
  );
};
