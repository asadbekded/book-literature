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
} from "./register.styles";
import SignUp from "../../assets/images/register-img.png";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { tokenAction } from "../../redux/token/tokenAction";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [inputType, setInputType] = useState(false);
  const theme = useSelector((state) => state.mode.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object({
    first_name: Yup.string().required("Required!!"),
    last_name: Yup.string().required("Required!!"),
    phone: Yup.string().required("Required!!"),
    email: Yup.string().email("Invalid email").required("Required!!"),
    password: Yup.string()
      .min(3, "3 tadan ko'p kiriting")
      .max(8, "8 tadan kam kiriting")
      .required("Required!!"),
  });

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "all",
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <FormContent>
      <FormBoxImg>
        <FormImg src={SignUp} width="500" height="500" />
      </FormBoxImg>

      <FormBox>
        <RegisterTitle color={theme ? '#fff' : '#000'} >Sign up</RegisterTitle>
        <RegisterText color={theme ? '#fff' : '#000'} >
          Already have an account?{" "}
          <RegisterNav to="/">Sign in</RegisterNav>
        </RegisterText>
        <RegisterForm
          onSubmit={handleSubmit((data) => {
            axios
              .post("http://localhost:5000/user/register", data)
              .then((res) => {
                if(res.status === 201) {
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
              {...register('first_name')}
              type="text"
              label="First name"
              helperText={errors.first_name?.message}
              error={errors.first_name ? true : false}
            />

            <TextField
              {...register('last_name')}
              type="text"
              label="Last name"
              helperText={errors.last_name?.message}
              error={errors.last_name ? true : false}
            />

            <TextField
              {...register('phone')}
              type="tel"
              label="Phone"
              helperText={errors.phone?.message}
              error={errors.phone ? true : false}
            />

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
