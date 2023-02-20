import React, { useRef } from "react";
import {
  ForBox,
  FormButton,
  FormInp,
  FormInpBox,
  FormLabel,
  FormTitle,
  ProfileContent,
  ProfileForm,
} from "./Security.style.js";
import { useSelector } from "react-redux";
import axios from "axios";

export const Security = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.token.token);

  const emailRef = useRef();
  const pasRef = useRef();
  const newRef = useRef();

  const handleSecurity = (evt) => {
    evt.preventDefault();

    axios
      .put('http://localhost:5000/user/secutiry', {
        data: {
          email: emailRef.current.value,
          currentPassword: pasRef.current.value,
          newPassword: newRef.current.value,
        },
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ProfileContent>
      <ProfileForm onSubmit={handleSecurity}>
        <FormTitle>Change Or Recover Your Password:</FormTitle>
        <FormInpBox>
          <FormLabel htmlFor="exampleInputEmail1">Email</FormLabel>
          <FormInp
            ref={emailRef}
            defaultValue={user.email}
            type="email"
            id="exampleInputEmail1"
          />
          <ForBox>Please enter your email.</ForBox>
        </FormInpBox>

        <FormInpBox>
          <FormLabel htmlFor="exampleInputPas1">Current password</FormLabel>
          <FormInp
            ref={pasRef}
            defaultValue={user.password}
            type="password"
            id="exampleInputPas1"
          />
          <ForBox>Please enter your password.</ForBox>
        </FormInpBox>

        <FormInpBox>
          <FormLabel htmlFor="exampleInputNew1">New Password</FormLabel>
          <FormInp ref={newRef} type="password" id="exampleInputNew1" />
          <ForBox>Please enter your new password.</ForBox>
        </FormInpBox>
        <FormButton type="submit">Save Changes</FormButton>
      </ProfileForm>
    </ProfileContent>
  );
};
