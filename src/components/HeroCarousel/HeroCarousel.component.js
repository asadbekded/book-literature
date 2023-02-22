import React, { useRef } from "react";
import Slider from "react-slick";
import {
  HeroContent,
  HeroItem,
  HeroList,
  ItemTitle,
  SearchBox,
  SearchBtn,
  SearchInp,
  SearchTitle,
} from "./HeroCarousel.style";
import Literature from "../../assets/images/literature-img.png";
import Search from "../../assets/images/search-icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
import axios from "axios";
import { useSelector } from "react-redux";

export const HeroCarousel = ({ setCategoryCard }) => {
  const theme = useSelector((state) => state.mode.theme);

  const inpRef = useRef();

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
    initialSlide: 0,
    cssEase: "linear",
    dots: true,
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    axios
      .get("http://localhost:5000/book/search?book=" + inpRef.current.value)
      .then((res) => {
        if (res.status === 201) {
          setCategoryCard(res.data);
        }
      })
      .catch((err) => console.log(err));

      inpRef.current.value = ''
  }

  return (
    <HeroContent>
      <HeroList image={Literature}>
        <Slider dots dotsClass="slick-dots line-indicator" customPaging={(i) => <div style={{position: 'absolute', width: '100%', opacity: '0', top: '-10px'}} >{i}</div>} style={{ width: "1100px" }} {...settings}>
          <HeroItem>
            <ItemTitle>
              TEMURIYLAR <br /> DAVRI <br /> ADABIYOTI
            </ItemTitle>
          </HeroItem>
          <HeroItem>
            <ItemTitle>
              JADID <br /> DAVRI <br /> ADABIYOTI
            </ItemTitle>
          </HeroItem>
          <HeroItem>
            <ItemTitle>
              SOVET <br /> DAVRI <br /> ADABIYOTI
            </ItemTitle>
          </HeroItem>
          <HeroItem>
            <ItemTitle>
              MUSTAQILLIK <br /> DAVRI <br /> ADABIYOTI
            </ItemTitle>
          </HeroItem>
        </Slider>
      </HeroList>

      <SearchBox color={theme ? '#191919' : '#fff'} >
        <SearchTitle>Qidirish</SearchTitle>
        <SearchInp color={theme ? '#404040' : '#F5F5F5'} ref={inpRef}  placeholder="Adiblar, kitoblar, audiolar, maqolalar..." type="text" />
        <SearchBtn onClick={(evt) => handleSearch(evt)} image={Search} >Izlash</SearchBtn>
      </SearchBox>
    </HeroContent>
  );
};
