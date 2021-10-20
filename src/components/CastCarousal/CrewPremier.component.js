import React from "react";
import Slider from "react-slick";
import {NextArrow, PrevArrow } from "./CastCarousal.config";

//component
import Poster from "./CastPoster.component";

export const CrewPremier = () => {
  const settings = {
    arrows: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const MovieCrewPosters = [
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
      alt: "Simu Liu",
      title: "Simu Liu",
      subtitle: "as Shang-Chi"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
      alt: "Awkwafina",
      title: "Awkwafina",
      subtitle: "as Katy"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
      alt: "Tony Leung Chiu-wai",
      title: "Tony Leung Chiu-wai",
      subtitle: "as Wenwu / The Mandarin"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
      alt: "Michelle Yeoh",
      title: "Michelle Yeoh",
      subtitle: "as Jiang Nan"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jaden-smith-888-24-03-2017-13-50-55.jpg",
      alt: "Jaden Smith",
      title: "Jaden Smith",
      subtitle: "as Dre Parker"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jackie-chan-881-24-03-2017-12-36-10.jpg",
      alt: "Jackie Chan",
      title: "Jackie Chan",
      subtitle: "as Mr.Han"
    },
    {
      src: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/wenwen-han-iein096468-16-09-2020-15-33-19.jpg",
      alt: "Wenwen Han",
      title: "Wenwen Han",
      subtitle: "as Meiying"
    },
  ]

  return(
    <>
      <Slider {...settings}>
      {MovieCrewPosters.map((image)=> (
        <Poster {...image}  />
      ))}
      </Slider>
    </>
  );
};

export default CrewPremier;
