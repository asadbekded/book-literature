import styled from "styled-components";

export const AuthorForm = styled.form`
  display: flex;
  align-items: center;
`;

export const FormImageContent = styled.div`
  width: 100%;
  max-width: 576px;
  padding: 99px 130px;
  background: rgba(243, 243, 243, 0.93);
`;

export const FormImageBox = styled.div`
  width: 100%;
  max-width: 315px;
  outline: none;
  background-color: #f8f8f8;
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 17px;
`;

export const FormImageInp = styled.input`
  width: 316px;
  position: relative;
  padding: 200px 73px;
  opacity: 0000;
`;

export const ImageInpBox = styled.div`
  position: absolute;
  width: 100%;
  max-width: 160px;
  text-align: center;
  top: 40%;
  left: 19%;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.3;
`;

export const ImageTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin: 0px;
  margin-top: 30px;
  color: #000000;
`
export const FormImg = styled.img``

export const AuthorBox = styled.div`
width: 100%;
max-width: 330px;
margin: 0px auto;
`
export const AuthorTitle = styled.h2`
font-weight: 600;
font-size: 32px;
line-height: 48px;
color: #000000;
margin: 0px;
margin-bottom: 12px;
`

export const AuthorInp = styled.input`
display: block;
width: 100%;
max-width: 330px;
padding: 13px 0px 12px 22px;
background-color: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #AAAAAA;
outline: none;
margin-bottom: 16px;
`
export const AuthorSel = styled.select`
display: block;
width: 100%;
max-width: 330px;
padding: 13px 0px 12px 22px;
background-color: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #AAAAAA;
outline: none;
margin-bottom: 16px;
`

export const AuthorTextarea = styled.textarea`
width: 100%;
max-width: 330px;
height: 82px;
padding: 13px 0px 0px 22px;
background-color: #FFFFFF;
border: 1px solid #B4B4BB;
border-radius: 10px;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #AAAAAA;
outline: none;
margin-bottom: 16px;
&::-webkit-scrollbar {
  width: 0px;
}
&::-webkit-scrollbar-thumb {
  background-color: none;
}
`

export const AuthorBtn = styled.button`
  width: 100%;
  max-width: 330px;
  padding: 10px 20px;
  border: none;
  color: #ffffff;
  background-color: #152540;
  border-radius: 99px;
  margin-top: 22px;
`

export const StyledBtn = styled.button`
  padding: 0px;
  background-color: blue;
  color: #fff;
  padding: 5px 8px;
  border: none;
  border-radius: 10px;
`;