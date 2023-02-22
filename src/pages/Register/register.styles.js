import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormContent = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
`;

export const FormBoxImg = styled.div`
  width: 100%;
  max-width: 690px;
  height: 100vh;
  background: rgba(201, 172, 140, 0.93);
  padding: 50px 0px;
  text-align: center;
`;
export const RegisterNav = styled(Link)`
color: #549FF9;

`;
export const FormImg = styled.img``;

export const FormBox = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 0px auto;
`;

export const RegisterTitle = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
  color:  ${(props) => props.color};
  margin: 0px 0px 10px 0px;
`;
export const RegisterText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  margin: 0px 0px 21px 0px;
  color:  ${(props) => props.color};
`;
export const RegisterForm = styled.form`
  text-align: center;
`;
export const FormInp = styled.input`
  width: 100%;
  max-width: 330px;
  display: block;
  margin: 0px auto;
  border: 1px solid #b4b4bb;
  outline: none;
  border-radius: 10px;
  padding: 10px 10px 10px 16px;
  margin-bottom: 16px;
`;

export const FormButton = styled.button`
  width: 100%;
  max-width: 288px;
  padding: 10px 20px;
  text-align: center;
  border: none;
  color: #ffffff;
  background-color: #152540;
  border-radius: 99px;
  margin-top: 22px;
`;
