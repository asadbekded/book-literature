import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: 24px;
  &:hover {
    color: #333;
  }
`;

export const StyledItem = styled.li`
position: relative;
  width: 100%;
  max-width: 295px;
  height: 455px;
  background-color: #f5f5f5;
  border-radius: 22px;
  color: #333;
  &::before{
    position: absolute;
    width: 100px;
    height: 40px;
    background-image: url(${(props) => props.image});
    background-size: auto;
    border-bottom-left-radius: 22px;
    background-repeat: no-repeat;
    bottom: 0px;
    left: 0px;
    content: '';
}
`;
export const StyledImg = styled.img`
  width: 295px;
  height: 310px;
  border-radius: 22px 22px 0px 0px;
`;

export const StyledBox = styled.div`
  position: relative;
  padding: 12px 0px 50px 16px;
  &::before{
    position: absolute;
    width: 71px;
    height: 142px;
    background-image: url(${(props) => props.image});
    background-size: auto;
    background-repeat: no-repeat;
    top: -10px;
    right: 0px;
    content: '';
}
`;

export const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333;
  margin: 0px 0px 6px 0px;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px;
`;
