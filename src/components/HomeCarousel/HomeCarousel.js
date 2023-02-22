import styled from "styled-components";

export const HeroContent = styled.div`
position: relative;
margin-bottom: 160px;
`

export const HeroList = styled.ul`
  background-image: url(${(props) => props.image});
  padding: 38px 0px 110px 87px;
  border-radius: 20px;
  width: 100%;
  max-width: 1260px;
  display: flex;
  margin: 0px;
  background-size: auto;
  background-repeat: no-repeat;
`;

export const HeroItem = styled.li`
  width: 100%;
  max-width: 337px;
`;
export const ItemTitle = styled.h1`
  font-weight: 400;
  font-size: 61px;
  line-height: 67px;
  color: #d1b89d;
  margin: 0px;
`;
export const SearchBox = styled.div`
  position: absolute;
  bottom: -75px;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  align-items: center;
  width: 100%;
  max-width: 1030px;
  background-color:  ${(props) => props.color};
  box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 29px 73px 29px;
`;

export const SearchTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #d1b89d;
  text-align: center;
`;

export const SearchInp = styled.input`
width: 100%;
max-width: 710px;
padding: 12px 0px 12px 27px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(13, 13, 13, 0.3);
background-color: ${(props) => props.color};
border-radius: 15px;
border: none;
outline: none;
`

export const SearchBtn = styled.button`
position: relative;
width: 160px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 12px 0px 12px 40px;
color: #EFDAC3;
margin-left: 14px;
background-color: #C9AC8C;
border-radius: 15px;
border: none;
&::before{
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url(${(props) => props.image});
    background-size: auto;
    background-repeat: no-repeat;
    left: 45px;
    content: '';
}
`
