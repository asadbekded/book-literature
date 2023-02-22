import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const StyledImg = styled.img`
  width: 505px;
  height: 650px;
  border-radius: 20px;
`;
export const StyledBox = styled.div`
  width: 100%;
  max-width: 670px;
`;

export const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #d1b89d;
  margin: 0px;
  margin-bottom: 12px;
`;

export const PageBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 14px;
`

export const PageTitle = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 30px;
margin: 0px;
color: ${(props) => props.color};
`

export const PageStr = styled.strong`
font-weight: 400;
font-size: 20px;
line-height: 30px;
margin: 0px;
color: ${(props) => props.color};
`

export const DescriptionBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 26px;
`

export const DescriptionTitle = styled.h3`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #D1B89D;
margin: 0px;
`

export const DescriptionSpan = styled.span`
display: block;
width: 100%;
max-width: 511px;
height: 0px;
border: 1px solid rgba(209, 184, 157, 0.6);
`

export const DescriptionText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${(props) => props.color};
`


export const CarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CarTitle = styled.h3`
  font-weight: 400;
  font-size: 31px;
  line-height: 46px;
  color: #d1b89d;
  margin: 0px;
`;

export const CarLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover{
    color: ${(props) => props.color};
  }
`;

