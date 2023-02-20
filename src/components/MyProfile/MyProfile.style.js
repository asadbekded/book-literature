import styled from "styled-components";

export const ProfileContent = styled.div`
  width: 100%;
  padding: 83px 110px 80px 110px;
`;

export const ProfileForm = styled.form`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
`;

export const ImageContent = styled.div``;

export const ProfileImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 175px;
  height: 175px;
  cursor: pointer;
  border-radius: 50%;
`;

export const StyledImg = styled.img`
  width: 100%;
  max-width: 175px;
  height: 175px;
  border-radius: 50%;
  cursor: pointer;
`

export const FormImageInp = styled.input`
  position: absolute;
  width: 175px;
  height: 175px;
  left: 0px;
  opacity: 0000;
  border-radius: 50%;
  cursor: pointer;
`;

export const ImageInpBox = styled.div`
  position: absolute;
  padding: 10px 8px 10px 8px;
  background-color: #f8f8f8;
  border-radius: 8px;
  bottom: -15px;
  right: 0px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
`;

export const FormBox = styled.div`
width: 100%;
max-width: 700px;
`;

export const FormTitle = styled.h2`
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #212121;
margin: 0px;
margin-bottom: 20px;
`;

export const FormInpBox = styled.div`
margin-bottom: 22px;
`;

export const FormLabel = styled.label`
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #464E5F;
margin-bottom: 7px;
`;

export const FormInp = styled.input`
display: block;
width: 100%;
max-width: 700px;
padding: 10px 0px 10px 19px;
background-color: #F3F6F9;
border-radius: 4px;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #464E5F;
border: none;
outline: none;
`;

export const ForBox = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 18px;
color: #B5B5C3;
opacity: 0.8;
`;

export const FormButton = styled.button`
display: block;
margin-left: auto;
padding: 12px 20px;
background-color: #152540;
border-radius: 4px;
font-weight: 600;
font-size: 13px;
line-height: 20px;
color: #FFFFFF;
border: none;
margin-top: 50px;
`;