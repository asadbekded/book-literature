import React, { useRef } from "react";
import { useState } from "react";
import {
  AuthorBox,
  AuthorBtn,
  AuthorForm,
  AuthorInp,
  AuthorSel,
  AuthorTextarea,
  AuthorTitle,
  FormImageBox,
  FormImageContent,
  FormImageInp,
  FormImg,
  ImageInpBox,
  ImageTitle,
  StyledBtn,
} from "./AddAuthor.style";
import AddIcon from "../../assets/images/add-icon.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

export const AddAuthor = () => {
  const token = useSelector((state) => state.token.token);
  const theme = useSelector((state) => state.mode.theme);
  const navigate = useNavigate();

  const firstRef = useRef();
  const lastRef = useRef();
  const birthRef = useRef();
  const deathRef = useRef();
  const countryRef = useRef();
  const genreRef = useRef();
  const bioRef = useRef();
  const [image, setImage] = useState(null);

  async function handleAuthor(evt) {
    evt.preventDefault();

    const data = new FormData();

    data.append("first_name", firstRef.current.value);
    data.append("last_name", lastRef.current.value);
    data.append("date_of_birth", birthRef.current.value);
    data.append("date_of_death", deathRef.current.value);
    data.append("country", countryRef.current.value);
    data.append("genre_id", genreRef.current.value);
    data.append("bio", bioRef.current.value);
    data.append("image", image);

    return await axios({
      method: "post",
      url: "http://localhost:5000/author",
      data: data,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <AuthorForm onSubmit={(evt) => handleAuthor(evt)}>
        <FormImageContent
          color={theme ? "#191919" : "rgba(243, 243, 243, 0.93)"}
        >
          <FormImageBox color={theme ? "#4D4D4D" : "#f8f8f8"}>
            <FormImageInp
              type="file"
              name="file"
              onChange={(evt) => setImage(evt.target.files[0])}
            />
            <ImageInpBox>
              <FormImg src={AddIcon} alt="Add img" width={62} height={62} />
              <ImageTitle>Click or drag file to this area to upload</ImageTitle>
            </ImageInpBox>
          </FormImageBox>
        </FormImageContent>

        <AuthorBox>
          <div className="d-flex align-items-center justify-content-between">
            <AuthorTitle color={theme ? "#fff" : "#000"}>
              Add author
            </AuthorTitle>
            <StyledBtn onClick={() => navigate(-1)} type="button">
              <FaBackward color="white" size="20px" />
            </StyledBtn>
          </div>
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={firstRef}
            type="text"
            placeholder="First name"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={lastRef}
            type="text"
            placeholder="Last name"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={birthRef}
            type="text"
            placeholder="Date of birth"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={deathRef}
            type="text"
            placeholder="Date of death"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={countryRef}
            type="text"
            placeholder="Country"
          />
          <AuthorSel
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={genreRef}
          >
            <option value="">Genre</option>
            <option value="1">Temuriylar davri </option>
            <option value="2">Jadid adabiyoti </option>
            <option value="3">Sovet davri </option>
            <option value="4">Mustaqillik davri </option>
          </AuthorSel>

          <AuthorTextarea
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={bioRef}
            cols="30"
            placeholder="Bio"
            rows="10"
          ></AuthorTextarea>

          <AuthorBtn type="submit">Create</AuthorBtn>
        </AuthorBox>
      </AuthorForm>
    </>
  );
};
