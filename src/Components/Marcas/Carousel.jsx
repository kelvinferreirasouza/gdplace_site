import React, { memo, useRef } from "react";

// Libraries
import { Col, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { PropTypes } from "prop-types";

// Data
import { MarcasInversores } from "./MarcasData";

const MarcasSwitch = (params, item, i) => {
    return (
        <Col key={i} className={params.className}>
            <m.div
              className="client-box relative w-full h-full inline-block" {...{ ...params.animation, transition: { delay: i / 4, duration: 0.8 } }}
            >
              <a target={item.target} aria-label="clientlogo" href={item.link ? item.link : "#"}>
                  <img className="relative w-[auto]" width="148" height="43" src={item.img} alt="clientlogo" />
              </a>
            </m.div>
        </Col>
    )
}

const MarcasCarouselSwitch = (item, i) => {
    return (
        <SwiperSlide key={`${item.img}-${i}`}>
            <div className="client-box">
            <a target={item.target} aria-label="clientlogo" href={item.link ? item.link : "#"}>
                <img width="" height="" src={item.img} alt="clientlogo" />
            </a>

            {item.img2 && 
                <a target={item.target} aria-label="clientlogo" href={item.link ? item.link : "#"}>
                    <img width="" height="" src={item.img2} alt="clientlogo" />
                </a>
            }
            </div>
        </SwiperSlide>
    )
}

const Marcas = (props) => {
  const swiperRef = useRef(null);
  return (
    props.carousel === true ? (
      <m.div className={`client-slider-wrapper relative${props.className ? ` ${props.className}` : ""}`} {...props.animation}>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          className={`${props.class} ${props.theme}`}
          modules={[Navigation, Pagination, Autoplay]}
          {...props.carouselOption}
        >
          {
            props.data.map((item, i) => {
              return MarcasCarouselSwitch(item, i)
            })
          }
        </Swiper>
        {
          props.carouselOption.navigation && (
            <>
              <div onClick={() => swiperRef.current.swiper.slidePrev()} className={`swiper-button-prev absolute ${props.class}`}></div>
              <div onClick={() => swiperRef.current.swiper.slideNext()} className={`swiper-button-next absolute ${props.class}`}></div>
            </>
          )
        }
      </m.div>
    ) : (
      <Row className={`${props.grid} ${props.theme}`}>
        {props.data.map((item, i) => MarcasSwitch(props, item, i))}
      </Row>
    )
  );
}

Marcas.defaultProps = {
  data: MarcasInversores,
  animationDelay: 0.2,
  theme: "client-logo-style-01",
}

Marcas.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      target: PropTypes.string,
      link: PropTypes.string
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  theme: PropTypes.string,
  grid: PropTypes.string,
  carousel: PropTypes.bool,
  carouselOption: PropTypes.object,
}

export default memo(Marcas);