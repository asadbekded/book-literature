import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header.component";
import {
    CarBox,
  CarLink,
  CarTitle,
  DataBox,
  DataContent,
  DataText,
  DataTitle,
  ListBox,
  ListImg,
  ListText,
  ListTitle,
  StyledBox,
  StyledContent,
  StyledImg,
  StyledItem,
  StyledLink,
  StyledList,
  StyledText,
  StyledTitle,
} from "./Single.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Single = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.token.token);
  const [data, setData] = useState([]);
  const [book, setBook] = useState([]);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
    initialSlide: 0,
    cssEase: "linear",
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/author/authorId/" + id,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 201) {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [id, token]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/author/books/" + id,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 201) {
          setBook(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [id, token]);

  return (
    <>
      <Header />
      <StyledContent>
        <StyledImg
          src={`http://localhost:5000/${data.image}`}
          alt="img"
          width={505}
          height={650}
        />
        <StyledBox>
          <StyledTitle>
            {data.first_name} {data.last_name}
          </StyledTitle>
          <StyledText>{data.bio}</StyledText>
          <DataContent>
            <DataBox>
              <DataText>Tavallud sanasi</DataText>
              <DataTitle>{data.date_of_birth}</DataTitle>
              <DataText>{data.country}</DataText>
            </DataBox>
            <DataBox>
              <DataText>Vafot etgan sana</DataText>
              <DataTitle>{data.date_of_death}</DataTitle>
              <DataText>{data.country}</DataText>
            </DataBox>
          </DataContent>
        </StyledBox>
      </StyledContent>
      <CarBox>
        <CarTitle>Asarlari</CarTitle>
        <CarLink to='/books' >Barchasini ko'rish</CarLink>
      </CarBox>


      <StyledList>
        <Slider style={{ width: "100%" }} {...settings}>
          {book.map((el) => (
            <StyledLink to={`/books/${el.id}`} key={el.id}>
              <StyledItem>
                <ListImg
                  src={`http://localhost:5000/${el.image}`}
                  alt="img"
                  width={190}
                  height={280}
                />
                <ListBox>
                  <ListTitle>{el.title}</ListTitle>
                  <ListText>
                    {data.first_name} {data.last_name}
                  </ListText>
                </ListBox>
              </StyledItem>
            </StyledLink>
          ))}
        </Slider>
      </StyledList>
    </> 
  );
};
