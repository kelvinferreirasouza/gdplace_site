import React from 'react'

// Libraries
import { Container, Row } from 'react-bootstrap'
import { m } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

// Components
import Buttons from '../../Components/Button/Buttons'
import { fadeIn, fadeInLeft } from "../../Functions/GlobalAnimations";

const Parceiros = (props) => {
    const swiperpakage = React.useRef(null)

    const InteractiveBannersData01 = [
        {
          subtitle: "Relaxing",
          title: "Rest and your energy will be restored",
          img: "https://via.placeholder.com/800x1018",
          btnTitle: "Learn more",
          btnLink: "#"
        },
        {
          subtitle: "Massage",
          title: "Massage day is the best day of the week",
          img: "https://via.placeholder.com/800x1018",
          btnTitle: "learn more",
          btnLink: "#"
        },
        {
          subtitle: "Massage",
          title: "Relax like your life depends on it",
          img: "https://via.placeholder.com/800x1018",
          btnTitle: "learn more",
          btnLink: "#"
        },
        {
          subtitle: "Relaxing",
          title: "Spa days are a necessity not a luxury",
          img: "https://via.placeholder.com/800x1018",
          btnTitle: "learn more",
          btnLink: "#"
        },
      ]

    return (
        <section className="relative py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#f0f2f7] overflow-hidden">
            <div className="text-overlap absolute tracking-[-3px] left-[-115px] top-0 text-[255px] leading-[255px] h-full text-center w-auto font-semibold font-serif text-white block md:hidden">
                relax
            </div>
            <Container>
                <Row>
                    <m.div className="relative md:mb-16 justify-center items-start flex flex-col col-xl-4 col-lg-4 col-md-8" {...fadeIn}>
                        <span className="font-serif font-medium text-gradient bg-gradient-to-r from-[#ec606c] to-[#eb7242] uppercase mb-[15px] inline-block sm:mb-[5px]">
                            Luxury packages
                        </span>
                        <h2 className="heading-5 font-serif font-medium text-darkgray">
                            Our spa massage therapy packages
                        </h2>
                        <p className="w-[85%] mb-[35px] lg:w-full">
                            Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="flex">
                            <div 
                                onClick={() => swiperpakage.current.swiper.slidePrev()}
                                className="btn-slider-next rounded-full flex justify-center items-center shadow-[0_0_10px_rgba(0,0,0,0.07)] text-black bg-white right-inherit h-[40px] w-[40px] cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-default"
                            >
                                <button aria-label="link for swiper next" className="text-xmd flex"><i className="feather-arrow-left"></i></button>
                            </div>
                            <div
                                onClick={() => swiperpakage.current.swiper.slideNext()}
                                className="btn-slider-prev text-black shadow-[0_0_10px_rgba(0,0,0,0.07)] bg-white rounded-full flex justify-center items-center right-inherit h-[40px] w-[40px] ml-[10px] cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-default"
                            >
                                <button aria-label="link for swiper prev" className="text-xmd flex">
                                    <i className="feather-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </m.div>
                    <m.div className="col-lg-7 offset-xs-1 will-change-transform">
                        <m.div {...{ ...fadeInLeft, transition: { duration: 0.6, ease: "linear" } }}>
                            <Swiper
                                className="interactivebanners-style-02 w-full h-full min-w-[1170px] md:min-w-full md:mr-0 white-move"
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={40}
                                observer={true}
                                observeParents={true}
                                keyboard={{
                                    enabled: "true",
                                    onlyInViewport: "true"
                                }}
                                breakpoints={{
                                    992: { slidesPerView: "3" },
                                    768: { slidesPerView: "2" },
                                }}
                                effect={'slide'}
                                ref={swiperpakage}
                            >
                                {InteractiveBannersData01.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i} className="my-swiper">
                                            <m.div className="interactivebanners-main overflow-hidden rounded-[6px]" {...{ ...props.animation, transition: { delay: ((i / 2) * 0.36) * props.animationDelay } }}>
                                                <div className="relative">
                                                {item.img && <img width="412px" height="524px" className="interactiveanners-img" src={item.img} alt="spa" />}
                                                <div className="absolute h-full w-full opacity-100 top-0 left-0 bg-gradient-to-b from-transparent to-[#141414]"></div>
                                                </div>
                                                <div className="fancy-text-content px-[55px] xs:px-[30px] xxs:px-[30px]">
                                                {item.subtitle && <span className="interactivebanners-subtitle font-medium bg-gradient-to-tr from-[#fd7f87] to-[#f7aa80] inline-block px-[15px] py-[5px] mb-[20px] rounded-[2px] text-white text-xs font-serif uppercase">{item.subtitle}</span>}
                                                {item.title && <div className="interactivebanners-title mb-[10px] text-white text-xlg font-serif lg:text-[18px] w-100">{item.title}</div>}
                                                {item.btnTitle && <Buttons ariaLabel="link for swiper" to={item.btnLink} title={item.btnTitle} className="btn-fill btn-fancy rounded-[3px] mt-[15px] font-medium font-serif uppercase md:mb-[15px]" themeColor="#fff" color="#232323" size="xs" />}
                                                </div>
                                            </m.div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </m.div>
                    </m.div>
                </Row>
            </Container>
        </section>
    )
}

export default Parceiros