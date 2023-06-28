import React, { memo } from 'react'

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { m } from "framer-motion"
import Buttons from '../Button/Buttons';

// Data
import { PropTypes } from 'prop-types';

const arrayPagination = (array, n) => {
    const favoriteData = array.filter((data) => data.favorite === true)
    const othersData = array.filter((data) => data.favorite === false)

    array = [...favoriteData, ...othersData]

    const pageSize = Math.ceil(array.length / n);
    return Array.from({ length: pageSize }, (_, index) => {
        const start = index * n;
        return array.slice(start, start + n);
    });
}

const Funcionalidade = (props) => {
    const swiperRef = React.useRef(null)
    const dataPaginate = arrayPagination(props.data, 2)
    console.log(dataPaginate)
    const style = {
        "--brand-color": typeof (props.overlay) === "object" ? `linear-gradient(to right top, ${props.overlay.map(item => item)})` : props.overlay,
    }

    return (
        <m.div className={`team-slider-wrapper relative`}>
            <Swiper
                className="swiper-pagination-02 swiper-pagination-lightPro swiper-pagination-medium h-full relative hotel-resort-slider"
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                {...props.carouselOption}
            >
                {
                    dataPaginate.map((items, i) => {
                        return (
                            <SwiperSlide style={style} key={i} className={`d-flex flex-column`}>
                                {items.map((item) => {
                                    return (
                                        <m.div key={i} className={`col mb-3 ${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
                                            <div className="rounded-md w-full">
                                                {item.img 
                                                    ? 
                                                        (<img height={42} width={51} className="inline-block items-center justify-center mb-[30px]" src={item.img} alt="featurebox" />)
                                                    :
                                                        item.icon
                                                        ?
                                                            <i className={item.icon}></i>
                                                        :
                                                            item.textIcon 
                                                                ?
                                                                    (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                                                                :
                                                                    <span className="text-basecolor inline-block icon-text">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                                                }
            
                                                <div className='feature-box-content'>
                                                    {item.title &&
                                                        <span className="font-medium title font-serif">{item.title}</span>
                                                    }
                    
                                                    {item.content &&
                                                        <p>{item.content}</p>
                                                    }
                                                </div>
                                            
                                                {(item.linkTitle || item.link) && 
                                                    <Buttons
                                                        ariaLabel="iconwithtext"
                                                        className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" 
                                                        to={item.link}
                                                        title={item.linkTitle}
                                                    />
                                                }
                                            </div>
                                        </m.div>
                                    )
                                })}
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </m.div>
    )
}

Funcionalidade.propTypes = {
    theme: PropTypes.string,
    themeColor: PropTypes.string,
    className: PropTypes.string,
    overlay: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.string
    ]),
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            img: PropTypes.string,
            name: PropTypes.string,
            designation: PropTypes.string,
            subtitle: PropTypes.string,
            social_links: PropTypes.arrayOf(
                PropTypes.exact({
                    title: PropTypes.string,
                    link: PropTypes.string,
                    icon: PropTypes.string,
                    color: PropTypes.string,
                })
            )
        })
    ),
    carouselOption: PropTypes.object,
    animation: PropTypes.object,
    animationDelay: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
}

export default memo(Funcionalidade)