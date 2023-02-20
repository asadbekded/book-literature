import React, { useRef, useState } from "react";
import { BsCamera } from "react-icons/bs";
import {
  ForBox,
  FormBox,
  FormButton,
  FormImageInp,
  FormInp,
  FormInpBox,
  FormLabel,
  FormTitle,
  ImageContent,
  ImageInpBox,
  ProfileContent,
  ProfileForm,
  ProfileImageBox,
  StyledImg,
} from "./MyProfile.style";
import { useSelector } from "react-redux";
import User from "../../assets/images/user.png";
import axios from "axios";

export const MyProfile = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.token.token);

  const firstRef = useRef();
  const lastRef = useRef();
  const phoneRef = useRef();
  const [image, setImage] = useState(null);

  async function handleProfile(evt) {
    evt.preventDefault();

    const data = new FormData();

    data.append("first_name", firstRef.current.value);
    data.append("last_name", lastRef.current.value);
    data.append("phone", phoneRef.current.value);
    data.append("image", image);

    return await axios({
      method: "put",
      url: "http://localhost:5000/user/account",
      data: data,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <ProfileContent>
      <ProfileForm onSubmit={(evt) => handleProfile(evt)}>
        <ImageContent>
          <ProfileImageBox>
            <StyledImg
              src={user.image ? `http://localhost:5000/${user.image}` : User}
              alt="user img"
              width="174"
              height="175"
            />
            <FormImageInp
              type="file"
              name="file"
              onChange={(evt) => setImage(evt.target.files[0])}
            />
            <ImageInpBox>
              <BsCamera size={35} color="#464E5F" />
            </ImageInpBox>
          </ProfileImageBox>
        </ImageContent>

        <FormBox>
          <FormTitle>My profile</FormTitle>
          <FormInpBox>
            <FormLabel htmlFor="exampleInputFirst1">First name</FormLabel>
            <FormInp
              ref={firstRef}
              defaultValue={user.first_name}
              type="text"
              id="exampleInputFirst1"
            />
            <ForBox>Please enter your first name.</ForBox>
          </FormInpBox>

          <FormInpBox>
            <FormLabel htmlFor="exampleInputLast1">Last Name</FormLabel>
            <FormInp
              ref={lastRef}
              defaultValue={user.last_name}
              type="text"
              id="exampleInputLast1"
            />
            <ForBox>Please enter your last name.</ForBox>
          </FormInpBox>

          <FormInpBox>
            <FormLabel htmlFor="exampleInputPhone1">Phone</FormLabel>
            <FormInp
              ref={phoneRef}
              defaultValue={user.phone}
              type="text"
              id="exampleInputPhone1"
            />
            <ForBox>Please enter your  phone number.</ForBox>
          </FormInpBox>
          <FormButton type="submit">Save Changes</FormButton>
        </FormBox>
      </ProfileForm>
    </ProfileContent>
  );
};
