import React, { useState } from 'react'

// Libraries
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'
import { m } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade, Keyboard } from "swiper";

// Components
import Buttons from '../../Components/Button/Buttons'
import CustomModal from '../../Components/CustomModal';
import IconWithText from '../../Components/IconWithText/IconWithText'
import FooterStyle02 from '../../Components/Footers/FooterStyle02';
import SideButtons from "../../Components/SideButtons";
import PricingTable03 from '../../Components/PricingTable/PricingTable03';
import TabPorqueEscolher from '../../Components/Tab/TabPorqueEscolher';
import MouseMove from '../../Components/MouseMove';
import Testimonials from '../../Components/Testimonials/Testimonials';

// Data
import { pricingTable03MonthData, pricingTable03YearData } from '../../Components/PricingTable/PricingTableData';
import { IconWithTextData_functions } from '../../Components/IconWithText/IconWithTextData';
import { TestimonialsData03 } from '../../Components/Testimonials/TestimonialsData';

// function
import { fadeIn, fadeInRight, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import Funcionalidade from '../../Components/Team/Funcionalidade';
import InViewPort from '../../Components/InViewPort';
import HeaderGdplace from '../../Components/Header';
import WhatsAppFloatingBtn from '../../Components/WhatsApp';
import MarcasDisponiveis from '../Home/MarcasDisponiveis';

const IconWithTextData = [
    {
        icon: "line-icon-Money-2 text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Melhores Preços",
        content: "Vários distribuidores integrados no sistema para ter acesso aos melhores preços",
    },
    {
        icon: "line-icon-Clock text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Otimize seu tempo",
        content: "Padronize os seus processos de orçamento/cotação de forma rápida e prática.",
    },
    {
        icon: "line-icon-Bar-Chart text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Potencialize seus resultados",
        content: "Economize tempo e dinheiro.",
    },
    {
        icon: "icon-rocket text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Acelere suas vendas",
        content: "Com mais tempo livre, a prospecção e vendas será maior",
    },
    {
        icon: "line-icon-Archery-2 text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Esteja na frente da concorrência",
        content: "Melhore a sua tomada de decisões com relação à clientes, sua equipe e sua empresa.",
    },
    {
        icon: "line-icon-Handshake text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] text-[40px]",
        title: "Agilize sua rotina",
        content: "Agilizando seus processos você pode focar em tornar-se um verdadeiro fechador de negócios",
    },
]

const IntegradorPage = (props) => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <div style={props.style}>
            <SideButtons />

            <HeaderGdplace fixed={true} {...props} />

            <WhatsAppFloatingBtn />

            {/* Section Start */}
            <section className="home-decor flex items-center justify-center overflow-hidden relative">
                <Swiper
                pagination={{ el: ".custom-pagination", clickable: true }}
                keyboard={true}
                effect="fade"
                loop={true}
                fadeEffect={{ crossFade: true }}
                modules={[Pagination, EffectFade, Mousewheel, Keyboard]}
                className="font-serif overflow-hidden h-[800px] lg:h-[545px] sm:h-[400px] xs:full-screen"
                onSlideChange={(swiperCore) => {
                    const { realIndex } = swiperCore;
                    setActiveSlide(realIndex)
                }}
                >
                <SwiperSlide className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default" style={{ backgroundImage: "url('/assets/img/webp/transparent.webp')" }}>
                    <m.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={activeSlide === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
                    >01</m.span>
                    <Container fluid="md" className="relative h-full">
                    <Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[10px]">
                        <Col xl={6} lg={6} sm={6} xs={12} className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2">
                        <m.span
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 0 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs">CLASSICAL HOME DECOR
                        </m.span>
                        <m.h2 className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 0 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1.2, duration: 0.6 }}>Kits de qualidade
                        </m.h2>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}>
                            <Buttons ariaLabel="ver catálogo" href="/shop/shop-wide" className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]" icon="line-icon-Arrow-OutRight text-[30px] inline-block" iconPosition="after" size="xl" color="#232323" themeColor="rgba(191,140,76,0.3)" to="/" title="ver catálogo" />
                        </m.div>
                        </Col>
                        <Col sm={6} className="relative xs:h-1/2">
                        <m.div
                            className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={activeSlide === 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}>
                            <m.div className="element-one inline-block" animate={{ x: [1, -6, -9, -9, -6, 6, 9, 9, 1], y: [1, 6, 9, 9, -6, -9, -9, -6, 1] }} transition={{ times: [1, 6, 2, 2, 6, 2, 2, 6], duration: 10, repeat: Infinity, }} >
                            </m.div>
                        </m.div>
                        <MouseMove enableOnHover={true} speed={2} className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0">
                            <div>
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1.7, duration: 1 }}
                                className="absolute top-[0] left-[155px] lg:w-[130px] lg:left-[70px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
                                src="/assets/img/webp/home-decor-img-transparent-09.webp"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="absolute bottom-[-55px] lg:w-[365px] lg:bottom-[-20px] lg:right-[190px] md:right-[60px] sm:w-[230px] sm:bottom-0 xs:right-auto xs:left-[calc(50%-50px)] xs:-translate-x-1/2"
                                src="/assets/img//webp/home-decor-img-transparent-08.webp"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 0 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2.2, duration: 1 }}
                                className="absolute right-[-125px] bottom-[-32px] lg:w-[120px] lg:bottom-[20px] lg:right-[100px] md:right-0 sm:w-[80px] sm:bottom-0 xs:right-auto xs:left-[calc(50%+100px)] xs:-translate-x-1/2"
                                src="/assets/img/webp//home-decor-img-transparent-07.webp"
                            />
                            </div>
                        </MouseMove>
                        </Col>
                    </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default" style={{ backgroundImage: "url('/assets/img/webp/transparent.webp')" }}>
                    <m.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={activeSlide === 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
                    >02</m.span>
                    <Container fluid="md" className="relative h-full">
                    <Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[50px]">
                        <Col xl={6} lg={6} sm={6} xs={12} className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2">
                        <m.span
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 1 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs">CLASSICAL HOME DECOR
                        </m.span>
                        <m.h2 className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 1 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1.2, duration: 0.6 }}>New chair collection
                        </m.h2>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}>
                            <Buttons ariaLabel="ver catálogo" href="/shop/shop-wide" className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]" icon="line-icon-Arrow-OutRight text-[30px] inline-block" iconPosition="after" size="xl" color="#232323" themeColor="rgba(191,140,76,0.3)" to="/" title="ver catálogo" />
                        </m.div>
                        </Col>
                        <Col sm={6} className="relative xs:h-1/2">
                        <m.div
                            className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={activeSlide === 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}>
                            <m.div className="element-one inline-block" animate={{ x: [1, -6, -9, -9, -6, 6, 9, 9, 1], y: [1, 6, 9, 9, -6, -9, -9, -6, 1] }} transition={{ times: [1, 6, 2, 2, 6, 2, 2, 6], duration: 10, repeat: Infinity, }} >
                            </m.div>
                        </m.div>
                        <MouseMove speed={2} className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0">
                            <div>
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1.7, duration: 1 }}
                                className="absolute top-[-20px] left-[415px] lg:w-[100px] lg:left-[150px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
                                src="https://via.placeholder.com/134x287"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="absolute w-[545px] bottom-[35px] right-[20px] lg:w-[365px] lg:bottom-[-20px] lg:right-[300px] md:right-[60px] sm:w-[230px] sm:right-[170px] sm:bottom-0 xs:bottom-[-50px] xs:left-[calc(50%-25px)] xs:-translate-x-1/2"
                                src="https://via.placeholder.com/514x498"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 1 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2.2, duration: 1 }}
                                className="absolute w-[332px] right-[-225px] bottom-[55px] lg:w-[260px] lg:bottom-[20px] lg:right-[100px] md:right-[-120px] sm:w-[180px] sm:bottom-0 sm:right-[40px] xs:bottom-[-50px] xs:left-[calc(50%+115px)] xs:-translate-x-1/2"
                                src="https://via.placeholder.com/313x358"
                            />
                            </div>
                        </MouseMove>
                        </Col>
                    </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide className="cover-background bg-[#faf6f3] z-20 flex items-center transition-default" style={{ backgroundImage: "url('/assets/img/webp/transparent.webp')" }}>
                    <m.span
                    initial={{ opacity: 0, x: -40 }}
                    animate={activeSlide === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="absolute top-0 left-[-110px] h-full flex items-center z-[1] text-[#fff] leading-none text-[310px] xl:hidden"
                    >03</m.span>
                    <Container fluid="md" className="relative h-full">
                    <Row className="font-serif h-full xs:flex-col-reverse xs:flex-nowrap xs:gap-y-[10px]">
                        <Col xl={6} lg={6} sm={6} xs={12} className="caption text-base overflow-hidden flex flex-col justify-center items-start relative lg:pl-5 xs:items-center xs:text-center xs:h-1/2">
                        <m.span
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 2 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="uppercase inline-block mb-[20px] text-left leading-[15px] text-basecolor font-medium sm:text-xs">CLASSICAL HOME DECOR
                        </m.span>
                        <m.h2 className="heading-6 text-[81px] leading-[86px] p-0 font-bold text-darkgray mb-[45px] lg:text-[60px] lg:leading-[55px] sm:text-[33px] sm:leading-[30px] sm:mb-[25px]"
                            initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            animate={{ clipPath: activeSlide === 2 ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
                            transition={{ delay: 1.2, duration: 0.6 }}>New chair collection
                        </m.h2>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}>
                            <Buttons ariaLabel="ver catálogo" href="/shop/shop-wide" className="font-semibold hover:text-darkgray flex items-center font-serif uppercase btn-expand rounded md:mb-[15px]" icon="line-icon-Arrow-OutRight text-[30px] inline-block" iconPosition="after" size="xl" color="#232323" themeColor="rgba(191,140,76,0.3)" to="/" title="view collections" />
                        </m.div>
                        </Col>
                        <Col sm={6} className="relative xs:h-1/2">
                        <m.div
                            className="circle w-[940px] h-[940px] bg-[#f0e6da] -z-[1] rounded-full absolute bottom-[-250px] left-[-50px] lg:w-[650px] lg:h-[650px] lg:-bottom-[30px] lg:left-[-99px] md:bottom-0 sm:w-[500px] sm:h-[500px] xs:w-[320px] xs:h-[320px] xs:top-[-50px] xs:right-[-50px] xs:left-auto"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={activeSlide === 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}>
                            <m.div className="element-one inline-block" animate={{ x: [1, -6, -9, -9, -6, 6, 9, 9, 1], y: [1, 6, 9, 9, -6, -9, -9, -6, 1] }} transition={{ times: [1, 6, 2, 2, 6, 2, 2, 6], duration: 10, repeat: Infinity, }} >
                            </m.div>
                        </m.div>
                        <MouseMove speed={2} className="h-full w-full block absolute z-[3] bottom-[50px] lg:bottom-0 xs:left-0">
                            <div>
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1.7, duration: 1 }}
                                className="absolute top-[0] left-[200px] lg:w-[130px] lg:left-[70px] sm:w-[80px] xs:-translate-x-1/2 xs:left-1/2"
                                src="https://via.placeholder.com/179x215"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="absolute w-[410px] left-[40px] bottom-[100px] lg:w-[365px] lg:bottom-[-20px] lg:right-[200px] lg:left-auto md:right-[80px] sm:w-[230px] sm:right-[120px] sm:bottom-0 xs:left-[calc(50%-25px)] xs:-translate-x-1/2 xs:right-auto"
                                src="https://via.placeholder.com/385x436"
                            />
                            <m.img
                                height=""
                                width=""
                                alt="..."
                                initial={{ opacity: 0 }}
                                animate={activeSlide === 2 ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 2.2, duration: 1 }}
                                className="absolute w-[565px] right-[-265px] bottom-[15px] lg:w-[350px] lg:bottom-[0] lg:right-0 md:w-[350px] md:right-[-100px] sm:w-[250px] sm:right-[-30px] sm:bottom-0 xs:right-auto xs:left-[calc(50%+100px)] xs:-translate-x-1/2"
                                src="https://via.placeholder.com/534x529"
                            />
                            </div>
                        </MouseMove>
                        </Col>
                    </Row>
                    </Container>
                </SwiperSlide>
                </Swiper>
                <div className="custom-pagination container xs:text-center"></div>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[90px] md:py-[75px] sm:py-[50px] border-b border-mediumgray">
                <Container>
                    <Row className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-center gap-y-10">
                        <Col>
                            <m.div className="flex items-center" {...{ ...fadeIn, transition: { delay: 0.2, duration: 1.2 } }}>
                                <i className="line-icon-Headset text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
                                <div> 
                                    <div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
                                        Suporte especializado
                                    </div>
                                    <span>
                                        Equipe qualificada
                                    </span>
                                </div>
                            </m.div>
                        </Col>
                        <Col>
                            <m.div className="flex items-center" {...{ ...fadeIn, transition: { delay: 0.4, duration: 1.2 } }}>
                                <i className="line-icon-Like-2 text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
                                <div>
                                    <div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
                                        Feche mais vendas
                                    </div>
                                    <span>
                                        Certeza de bom negócio
                                    </span>
                                </div>
                            </m.div>
                        </Col>
                        <Col>
                        <m.div className="flex items-center" {...{ ...fadeIn, transition: { delay: 0.6, duration: 1.2 } }}>
                            <i className="line-icon-Shield text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
                            <div>
                                <div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
                                    Plataforma Segura
                                </div>
                                <span>
                                    Levamos segurança a sério
                                </span>
                            </div>
                        </m.div>
                        </Col>
                        <Col>
                            <m.div className="flex items-center" {...{ ...fadeIn, transition: { delay: 0.8, duration: 1.2 } }}>
                                <i className="line-icon-Coin text-[35px] text-basecolor mr-[30px] lg:mr-[25px] inline-block"></i>
                                <div>
                                    <div className="text-darkgray leading-none font-medium text-xmd mb-[5px]">
                                        Promoções Diárias
                                    </div>
                                    <span>
                                        Promoções imperdiveis
                                    </span>
                                </div>
                            </m.div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <m.section className="py-[100px] lg:pt-[90px] md:pt-[75px] xs:pt-[50px] overflow-hidden" {...fadeIn}>
                <Container>
                    <Row className="items-center">
                        <Col xl={5} lg={6} className="pb-12 lg:pb-28 sm:pb-[50px]">
                            <div className="text-xmd mb-[20px] font-serif">
                                O Sistema mais completo para o Integrador Solar
                            </div>
                            <h5 className="font-serif text-darkgray font-medium mb-[5.5rem]">
                                Acelere sua rotina, otime seus processos e aumente seus resultados com a GDPlace
                            </h5>
                            <Row>
                                <Col>
                                    <div className="flex">
                                        <div className="mr-[35px]">
                                            <i className="line-icon-File-Pie text-[50px] text-fastblue"></i>
                                        </div>
                                        <div className="feature-box-content">
                                            <span className="text-darkgray block mb-[10px] font-serif font-medium">
                                                Gerador de Propostas
                                            </span>
                                            <p className="w-[95%]">
                                                Tenha disponivel diversos modelos de propostas comerciais, 
                                                completas e com a sua logo para apresentar e encantar o seu cliente.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-12">
                                    <div className="h-[1px] bg-[#ededed] my-[40px] w-full xs:my-[30px]"></div>
                                </Col>
                                <Col>
                                <div className="flex">
                                    <div className="mr-[35px]">
                                        <i className="line-icon-Solar text-[50px] text-fastblue"></i>
                                    </div>
                                    <div className="feature-box-content">
                                        <span className="text-darkgray block mb-[10px] font-serif font-medium">
                                            Orçamentos de Kits em Segundos
                                        </span>
                                        <p className="w-[95%]">
                                            Abandone planilhas e diversas plataformas.
                                            Gere seus orçamentos com mais de 15 distribuidores em tempo real e garanta as melhores condições.
                                        </p>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            lg={6}
                            xl={{ offset: 1 }} 
                            className="d-flex flex-column align-self-end justify-center text-center text-xl-start min-h-[676px] "
                            style={{ backgroundImage: "url('/assets/img/webp/home/banner-background.webp')" }}
                        >
                            <h5 className="mx-auto my-0 font-serif text-white font-medium">
                                Kit Rápido GDPlace
                            </h5>

                            <img
                                className="mx-auto"
                                loading="lazy" 
                                src="/assets/img/busca-kits.png"
                                width="800"
                                height="666"
                                alt="who-we-are"
                            />

                            <Buttons
                                ariaLabel="button"
                                to="/kit-rapido"
                                className="w-fit mx-auto mt-3 btn-fill shadow-[0_0_15px_rgba(0,0,0,0.10)] font-medium btn-fancy font-serif uppercase rounded-[20px] btn-shadow text-[15px]" 
                                size="lg" 
                                themeColor="#fff" 
                                color="#000" 
                                title="Quero conhecer" 
                            />
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start */}
            <section className="bg-lightgray pt-[80px] pb-[45px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                <Container>
                    <Row>
                        <Col className="mb-[6%]">
                            <span className="w-100 text-center font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                Sistema fácil e prático de usar
                            </span>
                            <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px] m-0">
                                Funcionalidades do Sistema
                            </h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} sm={6} xl={6} className="text-center d-flex align-items-center">
                            <img height={341} width={500} src="/assets/img/integrador/desktopMobile.png" alt="blog-category" />
                        </Col>
                        <Col lg={7} sm={6} xl={6} className="text-center px-2">
                            <Funcionalidade
                                theme="icon-with-text-06"
                                data={IconWithTextData_functions}
                                carousel={true}
                                carouselOption={{
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                    navigation: false,
                                    fadeEffect: {
                                        crossFade: true
                                    },
                                    autoplay: {
                                        delay: 3000,
                                        disableOnInteraction: false 
                                    },
                                    pagination: {
                                        dynamicBullets: true,
                                        clickable: true
                                    },
                                    breakpoints: {
                                        1200: {slidesPerView: 2},
                                        992: { slidesPerView: 2 }, 
                                        768: { slidesPerView: 2 } 
                                    } 
                                }} 
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            <section>
                <Container>
                    <Row className="py-[100px] justify-center">
                        <Col md={12}>
                            <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px] m-0">
                                Por que escolher a GDPlace
                            </h6>
                        </Col>

                        <Col md={2} className='d-flex justify-center'>
                            <div className="h-[3px] my-[24px] bg-[#2c89c6] w-100"></div>
                        </Col>

                        <Col lg={11}>
                            <TabPorqueEscolher />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section start */}
            <m.div className="relative overflow-hidden py-[140px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]" {...fadeIn}>
                <Parallax 
                    className="lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full" 
                    translateY={[-40, 40]} 
                    style={{ backgroundImage: `url(/assets/img/webp/paineis_solares.webp)` }}
                ></Parallax>

                
                <div className="top-0 left-0 w-full h-full absolute opacity-0 bg-[#262b35]"></div>

                <Container>
                    <Row className="items-center justify-center">
                        <Col xl={{ offset: 4, span: 2 }} lg={{ span: 4, offset: 2 }} md={{ order: 2, span: 3, offset: 1 }} className="text-center md:text-start sm:mb-[30px]">
                            {/* Modal Component Start */}
                            <CustomModal.Wrapper
                                modalBtn={
                                    <>
                                        <Buttons 
                                            type="submit"
                                            className="btn-sonar mx-auto border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)] btn-custom-class who-we-are-bg-color btnVideoIntegrador" 
                                            color="#fff"
                                            size="xl" 
                                            title={<i className="icon-control-play text-[36px] xs:text-[28px]" />} 
                                        />
                                        <span 
                                            className="relative font-serif text-white font-medium mt-[15px] leading-[30px] block w-full text-center"
                                        >
                                                <b>Assista o video</b> e saiba como funciona
                                        </span>
                                    </>
                                } >
                                <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                <div className="fit-video">
                                    <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                </div>
                                </div>
                            </CustomModal.Wrapper>
                            {/* Modal Component End */}
                        </Col>
                        <Col lg={6} md={{ span: 8, order: 1 }} className="relative xs:text-center landscape:md:text-center xs:px-0">
                            <span className="text-lg font-serif mb-[25px] block text-white opacity-60 md:text-xmd md:leading-[22px]">
                                Na prática
                            </span>

                            <h4
                                className="font-serif text-white font-medium mb-[30px]"
                            >
                                Saiba como o Sistema GDPlace funciona na prática
                            </h4>

                            <Buttons
                                href="/page/contact-classic"
                                className="mt-[15px] font-medium rounded-[50px] font-serif uppercase hover:text-darkgray bg-transparent btn-slide-right"
                                size="md"
                                color="#fff"
                                themeColor="#fff"
                                title="Conheça nossos planos"
                            />
                        </Col>
                    </Row>
                </Container>
            </m.div>
            {/* Section end */}

            {/* Section Start */}
            <section className="py-[80px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container>
                    <m.div className="row justify-center" {...fadeIn}>
                        <Col lg={5} sm={6} xl={4} className="text-center mb-16">
                            <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                Fique a frente da concorrencia
                            </span>
                            <h2 className="heading-5 font-serif font-light text-darkgray tracking-[-1px] mx-auto mx-sm-0 xs:w-[80%] mb-0">
                                Conheça os beneficios de utilizar a GDPlace
                            </h2>
                        </Col>
                    </m.div>
                    <Row className="items-center justify-between">
                        <Col lg={3} md={4} className="text-center md:text-end sm:mb-[30px]">
                            <IconWithText grid="row-cols-1 row-cols-sm-2 row-cols-md-1 gap-y-[5rem] text-right sm:justify-center sm:text-center" theme="icon-with-text-03" data={IconWithTextData.slice(0, 3)} className="application-iconwithtext" animation={fadeInRight} animationDelay={0.2} />
                        </Col>
                        <Col md={4} className="px-lg-0 sm:mb-[20px]">
                            <m.img width={390} height={726} alt="mobile" src="/assets/img/webp/home/smartphone_gdplace.webp" className="w-full" {...{ ...zoomIn, transition: { duration: 0.7 } }} />
                        </Col>
                        <Col lg={3} md={4}>
                            <IconWithText grid="row-cols-1 row-cols-sm-2 row-cols-md-1 gap-y-[5rem] text-left sm:justify-center sm:text-center" theme="icon-with-text-03" data={IconWithTextData.slice(3, 6)} className="application-iconwithtext" animation={fadeInLeft} animationDelay={0.2} />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            <section className="bg-lightgray py-[100px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] border-t">
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[3%]">
                            <span className="w-100 text-center font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                Cases de Sucesso
                            </span>

                            <h6 className="font-serif text-darkgray font-medium">
                                Veja o que falam sobre a GDPlace
                            </h6>

                            <Col md={2} className='d-flex justify-center text-center mx-auto'>
                                <div className="h-[3px] my-[24px] bg-[#2c89c6] w-100"></div>
                            </Col>
                        </Col>
                    </Row>

                    <Row className="justify-center">
                        <Col xs={12} sm={8} md={12}>
                            <Testimonials
                                grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-[30px] justify-center"
                                theme='testimonials-style-03'
                                className="sm:px-0"
                                data={TestimonialsData03}
                                animation={fadeIn}
                                animationDelay={0.3} />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Lazy Load HTML */}
            <InViewPort>

                <MarcasDisponiveis />                    

                {/* Section Start */}
                <section className="pb-[105px] pt-[40px] lg:pb-[90px] md:pb-[75px] md:pt-0 sm:py-[50px] text-center bg-lightgray">
                    <Container>
                        <Row className="justify-center">
                        <Col xl={5} lg={6} sm={7}>
                            <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">
                                Planos que cabem no seu bolso
                            </span>
                            <h2 className="heading-5 font-serif text-darkgray text-center inline-block font-semibold mb-[40px] tracking-[-1px] md:mb-16">
                                Planos de Assinatura GDPlace
                            </h2>
                        </Col>
                        </Row>
                        <Container fluid className="switch-tab">
                        <Tabs defaultActiveKey="anual">
                            <Tab eventKey="mensal" title="MENSAL" className="mr-[-2px]">
                                <Container fluid>
                                    <Row className="justify-center">
                                    <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                                        <PricingTable03
                                            grid="row row-cols-1 gap-y-10 row-cols-md-3 items-center"
                                            theme="pricing-table-style-03"
                                            className="pb-[15px]" 
                                            data={pricingTable03MonthData} 
                                        />
                                    </Col>
                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="anual" title="ANUAL">
                            <Container fluid>
                                <Row className="justify-center">
                                <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                                    <PricingTable03 
                                        grid="row row-cols-1 row-cols-md-3 gap-y-10 items-center"
                                        theme="pricing-table-style-03"
                                        className="pb-[15px]"
                                        data={pricingTable03YearData} 
                                    />
                                </Col>
                                </Row>
                            </Container>
                            </Tab>
                        </Tabs>
                        </Container>
                    </Container>
                </section>
                {/* Section End */}
            </InViewPort>

            {/* Footer Start */}
            <FooterStyle02 theme="dark" className="text-slateblue bg-[#262b35]" />
            {/* Footer End */}
        </div>
    )
}

export default IntegradorPage
