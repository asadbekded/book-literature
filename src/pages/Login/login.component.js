import React, { useState } from "react";
import {
  FormBox,
  FormBoxImg,
  FormButton,
  FormContent,
  FormImg,
  RegisterForm,
  RegisterNav,
  RegisterText,
  RegisterTitle,
} from "./login.styles";
import SignIn from "../../assets/images/login-img.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenAction } from "../../redux/token/tokenAction";

export const Login = () => {
  const [inputType, setInputType] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required!!"),
    password: Yup.string()
      .min(3, "3 tadan ko'p kiriting")
      .max(8, "8 tadan kam kiriting")
      .required("Required!!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormContent>
      <FormBoxImg>
        <FormImg src={SignIn} width="500" height="500" />
      </FormBoxImg>

      <FormBox>
        <RegisterTitle>Sign in</RegisterTitle>
        <RegisterText>
          Already have an account? <RegisterNav to="/register">Sign up</RegisterNav>
        </RegisterText>
        <RegisterForm
          onSubmit={handleSubmit((data) => {
            axios
              .post("http://localhost:5000/user/login", data)
              .then((res) => {
                if(res.status === 201) {
                  console.log(res)
                  localStorage.setItem('token', res.data.token)
                  dispatch(tokenAction(res.data.token))
                  navigate('/')
                }
              })
              .catch((err) => console.log(err));
          })}
        >
          <Stack spacing={2}>
            <TextField
              {...register('email')}
              type="email"
              label="Email"
              helperText={errors.email?.message}
              error={errors.email ? true : false}
            />

            <TextField
              {...register('password')}
              type={inputType ? "text" : "password"}
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => setInputType(!inputType)}
                  >
                    {inputType ? (
                      <VisibilityIcon cursor="pointer" color="primary" />
                    ) : (
                      <VisibilityOffIcon cursor="pointer" color="primary" />
                    )}
                  </InputAdornment>
                ),
              }}
              helperText={errors.password?.message}
              error={errors.password ? true : false}
            />
            <FormButton disabled={!isValid} type="submit">
              Next step
            </FormButton>
          </Stack>
        </RegisterForm>
      </FormBox>
    </FormContent>
  );
};
