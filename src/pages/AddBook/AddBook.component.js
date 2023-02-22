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
} from "./AddBook.style";
import AddIcon from "../../assets/images/add-icon.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

export const AddBook = () => {
  const token = useSelector((state) => state.token.token);
  const theme = useSelector((state) => state.mode.theme);
  const [auth, setAuth] = useState([]);
  const navigate = useNavigate();

  const titleRef = useRef();
  const pageRef = useRef();
  const yearRef = useRef();
  const priceRef = useRef();
  const genreRef = useRef();

  const handleSel = (evt) => {
    axios
      .get(`http://localhost:5000/author/genreId/${evt.target.value}`)
      .then((res) => setAuth(res.data))
      .catch((err) => console.log(err));
  };

  const authorRef = useRef();
  const descriptionRef = useRef();
  const [image, setImage] = useState(null);

  async function handleAuthor(evt) {
    evt.preventDefault();

    const data = new FormData();

    data.append("title", titleRef.current.value);
    data.append("page", pageRef.current.value);
    data.append("year", yearRef.current.value);
    data.append("price", priceRef.current.value);
    data.append("genre_id", genreRef.current.value);
    data.append("author_id", authorRef.current.value);
    data.append("description", descriptionRef.current.value);
    data.append("image", image);

    return await axios({
      method: "post",
      url: "http://localhost:5000/book",
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
            <AuthorTitle color={theme ? "#fff" : "#000"}>Add book</AuthorTitle>
            <StyledBtn onClick={() => navigate(-1)} type="button">
              <FaBackward color="white" size="20px" />
            </StyledBtn>
          </div>
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={titleRef}
            type="text"
            placeholder="Title"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={pageRef}
            type="text"
            placeholder="Pages"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={yearRef}
            type="text"
            placeholder="Year"
          />
          <AuthorInp
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={priceRef}
            type="text"
            placeholder="Price"
          />

          <AuthorSel
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            onChange={(evt) => handleSel(evt)}
            ref={genreRef}
          >
            <option value="">Genre</option>
            <option value="1">Temuriylar davri </option>
            <option value="2">Jadid adabiyoti </option>
            <option value="3">Sovet davri </option>
            <option value="4">Mustaqillik davri </option>
          </AuthorSel>

          <AuthorSel
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={authorRef}
          >
            <option value="">Author</option>
            {auth.map((el) => (
              <option key={el.id} value={el.id}>
                {el.first_name} {el.last_name}
              </option>
            ))}
          </AuthorSel>

          <AuthorTextarea
            just={theme ? "#FFF" : "#AAA"}
            color={theme ? "#1B1B1B" : "#FFFFFF"}
            ref={descriptionRef}
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
