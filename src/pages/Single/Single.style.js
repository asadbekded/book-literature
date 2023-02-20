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
  margin-bottom: 8px;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.8);
  margin: 0px;
  margin-bottom: 44px;
`;

export const DataContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    position: absolute;
    width: 25px;
    height: 4px;
    background-color: #d1b89d;
    left: 100px;
    content: "";
  }
`;

export const DataBox = styled.div`
  margin-right: 54px;
`;

export const DataTitle = styled.h2`
  font-weight: 400;
  font-size: 39px;
  line-height: 144.4%;
  color: #d1b89d;
  margin: 0px;
`;

export const DataText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(13, 13, 13, 0.6);
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
  padding-bottom: 80px;
`;

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
  border-radius: 22px;
  color: #333;
`;
export const ListImg = styled.img`
  width: 190px;
  height: 280px;
  border-radius: 22px;
`;

export const ListBox = styled.div`
  position: relative;
  padding: 12px 0px 10px 5px;
`;

export const ListTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin: 0px;
  margin-bottom: 6px;
`;

export const ListText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px;
`;

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
  color: #0d0d0d;
  text-decoration: none;
  &:hover{
    color: #0d0d0d;
  }
`;
