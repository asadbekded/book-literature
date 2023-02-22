import { Switch } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeAction } from "../../redux/mode/modeAction";
import {
  ForBox,
  FormButton,
  FormInpBox,
  FormLabel,
  FormSel,
  FormTitle,
  ProfileContent,
  ProfileForm,
} from "./Settings.style.js";

export const Settings = () => {
  const theme = useSelector((state) => state.mode.theme);
  const dispatch = useDispatch();

  const handleMode = () => {
    theme ? dispatch(modeAction(false)) : dispatch(modeAction(true));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#191919" : "#fff";
  }, [theme]);

  return (
    <ProfileContent>
      <ProfileForm>
        <FormTitle color={theme ? "#fff" : "#212121"}>Settings</FormTitle>
        <FormInpBox>
          <FormLabel
            color={theme ? "#F3F6F9" : "#464E5F"}
            htmlFor="exampleInputEmail1"
          >
            Language
          </FormLabel>
          <FormSel>
            <option value="english">English</option>
            <option value="russian">Russian </option>
            <option value="uzbek">Uzbek</option>
          </FormSel>
          <ForBox>Please change language.</ForBox>
        </FormInpBox>
        <Switch onClick={handleMode} checked={theme} inputProps={{ 'aria-label': 'controlled' }} />
        <FormButton type="submit">Save Changes</FormButton>
      </ProfileForm>
    </ProfileContent>
  );
};
