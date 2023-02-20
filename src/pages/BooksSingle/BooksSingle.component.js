import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Header } from "../../components/Header/Header.component";
import { ListBox, ListImg, ListText, ListTitle, StyledItem, StyledLink, StyledList } from "../Single/Single.style";
import { CarBox, CarLink, CarTitle, DescriptionBox, DescriptionSpan, DescriptionText, DescriptionTitle, PageBox, PageStr, PageTitle, StyledBox, StyledContent, StyledImg, StyledTitle } from "./BooksSingle.style";

export const BooksSingle = () => {
  const { id } = useParams();
  const [ data, setData ] = useState([]);
  const [ book, setBook ] = useState([]);
  const token = useSelector((state) => state.token.token);

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
      url: "http://localhost:5000/book/bookId/" + id,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 201) {
          setData(res.data)
        }
      })
      .catch((err) => console.log(err));
  }, [id, token]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/author/books/" + data.author_id,
      headers: { Authorization: token, "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        if (res.status === 201) {
          setBook(res.data)
        }
      })
      .catch((err) => console.log(err));
  }, [data, token]);

  return (
    <>
      <Header/>
      <StyledContent>
        <StyledImg
          src={`http://localhost:5000/${data.image}`}
          alt="img"
          width={505}
          height={650}
        />
        <StyledBox>
          <StyledTitle>{data.title}</StyledTitle>
          <PageBox>
            <PageTitle>Sahifalar soni:</PageTitle>
            <PageStr>{data.page}</PageStr>
          </PageBox>
          <PageBox>
            <PageTitle>Chop etilgan:</PageTitle>
            <PageStr>{data.year} years</PageStr>
          </PageBox>
          <PageBox>
            <PageTitle>Kitob narxi:</PageTitle>
            <PageStr>{data.price}$</PageStr>
          </PageBox>
          <DescriptionBox>
            <DescriptionTitle>To'liq malumot</DescriptionTitle>
            <DescriptionSpan></DescriptionSpan>
          </DescriptionBox>
          <DescriptionText>{data.description}</DescriptionText>
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
