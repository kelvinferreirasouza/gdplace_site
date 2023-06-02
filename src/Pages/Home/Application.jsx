import React from 'react'

// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from 'react-bootstrap'
import { Autoplay, Keyboard } from "swiper";
import { m } from 'framer-motion';
import { Link as ScrollTo } from "react-scroll"

// Components
import Buttons from '../../Components/Button/Buttons'
import { TiltBox } from '../../Components/FancyText/FancyText'
import IconWithText from '../../Components/IconWithText/IconWithText'
import PricingTable04 from '../../Components/PricingTable/PricingTable04';
import CustomModal from '../../Components/CustomModal'
import FooterStyle10 from '../../Components/Footers/FooterStyle10';
import TestimonialsCarousel04 from '../../Components/TestimonialCarousel/TestimonialsCarousel04';
import SideButtons from "../../Components/SideButtons";
import Typed from 'react-typed';
import { fadeIn, fadeInBlur, fadeInRight, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import { TextAnime } from '../../Components/FancyText/FancyText';
import Lists from '../../Components/Lists/Lists';
import { ListData01 } from '../../Components/Lists/ListsData';

// Data
import { TestimonialsCarouselData4 } from '../../Components/TestimonialCarousel/TestimonialsCarouselData';

// function
import InViewPort from '../../Components/InViewPort';
import HeaderGdplace from '../../Components/Header';
import CarouselDistribuidores from '../../Components/Distribuidores/Carousel';

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

const TestimonialsCarouselData = [
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    },
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    },
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    },
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    },
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    },
    {
        img: "https://lithoreact.themezaa.com/assets/img/webp/application-screenshots-02.webp"
    }
]

const pricingTable04 = [
    {
        title: "BASIC PLAN",
        subtitle: "Core features",
        price: "$29",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Step by step support"
        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
    },
    {
        title: "STANDARD PLAN",
        subtitle: "Most popular",
        price: "$39",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Responsive app layout", "Step by step support"

        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
        popular: {
            isPopular: true,
            color: "#502e95"
        }
    },
    {
        title: "PREMIUM PLAN",
        subtitle: "Huge features",
        price: "$49",
        term: "PER YEAR",
        plans: [
            "Pixel perfect design", "Personal applications", "Step by step support"

        ],
        buttonTitle: "Choose Package",
        buttonLink: "/page/pricing-packages",
    }
]

const ApplicationPage = (props) => {
    const swiperRef = React.useRef(null)

    return (
        <div style={props.style}>
            <SideButtons />
            {/* Header Start */}
            <HeaderGdplace type="reverse-scroll" {...props} />
            {/* Header End */}

            {/* Section Start */}
            <section className="bg-cover bg-no-repeat overflow-visible bg-center" style={{ backgroundImage: "url('/assets/img/webp/home/banner-background.webp')" }}>
                <Container>
                    <Row className="justify-center sm:text-center">
                        <Col lg={6} xl={5} md={7} sm={8} className="h-[100vh] flex flex-col items-start justify-center pb-40 pt-24 lg:pt-40 lg:pb-32 md:pt-24 md:pb-40 sm:h-auto sm:pb-20 md:h-[650px]">
                            <m.span
                                {...{ ...fadeInBlur, transition: { delay: 0.5, ease: "easeInOut" } }} 
                                className="
                                    font-serif
                                    font-semibold
                                    text-md
                                    leading-[24px]
                                    tracking-[1px]
                                    text-gradient
                                    bg-gradient-to-r
                                    from-[#ffff]
                                    to-[#ffff]
                                    border-b
                                    border-gradient-light-white-light-red
                                    inline-block
                                    uppercase
                                    mb-[45px]
                                    sm:mt-0
                                    sm:mx-auto
                                    sm:mb-[35px]
                                ">
                                Comparador de Preços Solar
                            </m.span>
                            <m.h2 
                                {...{ ...fadeInBlur, transition: { delay: 1, ease: "easeInOut" } }}
                                className="
                                    font-serif 
                                    text-white
                                    font-bold
                                    tracking-[-3px]
                                    uppercase 
                                    mb-10
                                    sm:mb-[16px]
                                    min-h-[121px]
                                    d-flex
                                    flex-column
                                    gap-[1.5rem]
                                    sm:w-[100%]
                                    sm:items-center
                                "
                            >
                                <span className="text-[70px] lg:text-[50px] mr-[35px] xs:mr-0">Turbine</span>
                                <Typed
                                    className="
                                        text-[70px]
                                        lg:text-[50px]
                                        text-white 
                                        text-left
                                        inline-block
                                        leading-[42px]
                                        lg:align-center"
                                    strings={["seu negócio", "suas vendas"]}
                                    typeSpeed={180}
                                    backSpeed={120}
                                    showCursor
                                    cursorChar="|"
                                />
                            </m.h2>

                            <m.p 
                                {...{ ...fadeInBlur, transition: { delay: 1.2, ease: "easeInOut" } }}
                                className="text-lg leading-[30m.px] text-white mb-[25px] font-light w-[85%] sm:w-full md:text-xmd sm:mb-[16px] xs:leading-[22px]"
                            >
                                Agilize seus processos com o mais completo comparador de preços do setor solar.
                            </m.p>

                            <m.div
                                {...{ ...fadeInBlur, transition: { delay: 1.2, ease: "easeInOut" } }}
                                className="sm:w-[100%] sm:items-center"
                            >
                                <ScrollTo href='#' to="download" offset={0} delay={0} spy={true} smooth={true} duration={800} className="sm:contents">
                                    <Buttons 
                                        type="submit"
                                        aria-label="download section down"
                                        className="font-medium btn-fancy font-serif uppercase tracking-[1px] btn-gradient mt-6 md:mb-[15px] rounded-[2px] sm:my-0 sm:mt-[16px] sm:mx-auto"
                                        themeColor={["#003ef5", "#078cff"]} 
                                        size="lg"
                                        color="#fff" 
                                        icon="fas fa-arrow-right"
                                        iconPosition="after"
                                        title="Cadastre-se" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open('https://sistema.gdplace.com.br/integrador/landingPage', '_blank', 'noopener,noreferrer')
                                        }}
                                    />
                                </ScrollTo>
                            </m.div>
                        </Col>

                        <Col xl={{ offset: 1 }} lg={6} md={5} className="z-0 text-left self-center md:self-center p-0">
                            <TiltBox className="bottom-[0] lg:-bottom-[40px]">
                            <m.img
                                {...{ ...fadeInBlur, transition: { delay: 0.5, ease: "easeInOut" } }}
                                className='w-[500px] h-[450px] lg:w-[350px] lg:h-[350px] sm:w-[80%] sm:h-[100%] lg:mx-auto'
                                src="/assets/img/webp/home/pc_gdplace.webp"
                                alt="Sistema GDPlace"
                            />
                            </TiltBox>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End*/}

            {/* Lazy Load HTML */}
            <InViewPort>
                {/* Section Start */}
                <section className="py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] bg-lightgray overflow-hidden">
                    <Container>
                    <Row className="items-center">
                        <m.div className="md:mb-[50px] sm:mb-[30px] col-xl-4 col-lg-6 order-lg-2" {...{ ...fadeInLeft, transition: { delay: 0.5, ease: "circOut", duration: 0.6 } }}>
                        <div className="-mr-[30vw] md:mr-0">
                            <img src="/assets/img/webp/what-we-offers-03.webp" className="shadow-md rounded-[5px] overflow-hidden w-full" height="945" width="605.17" alt="what-we-offers" />
                        </div>
                        </m.div>
                        <m.div className="pr-[5%] sm:pr-[15px] col-xl-5 col-lg-6 order-lg-1 pl-0" {...fadeIn}>
                        <h5 className="font-serif font-medium text-darkgray leading-[40px] mb-[40px]">
                            <span className="initial p-0">
                                Nós criamos soluções inteligentes para o setor solar, economize

                                <TextAnime
                                    duration={3000}
                                    color={["#b783ff", "#fa7cc1", "#ff9393"]}
                                    lineColor="#5971ff"
                                    className="text-left fancy-border-bottom !font-semibold text-darkgray pl-3"
                                    animation="slide"
                                    data={["tempo", "dinheiro"]} 
                                />
                                conosco.
                            </span>
                        </h5>
                        <p className="mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Lists theme="list-style-01" className="" data={ListData01} animation={fadeIn} />
                        </m.div>
                    </Row>
                    </Container>
                </section>
                {/* Section End */}

                {/* Section Start */}
                <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
                    <Container>
                        <m.div className="row justify-center" {...fadeIn}>
                            <Col lg={5} sm={6} xl={4} className="text-center mb-16">
                                <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                    Por que usar a GDPlace?
                                </span>
                                <h2 className="heading-5 font-serif font-light text-darkgray tracking-[-1px] mx-auto mx-sm-0 xs:w-[80%]">
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

                {/* Info Banner Style 02 */}
                <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center"
                    style={{ backgroundImage: `url("https://lithoreact.themezaa.com/assets/img/webp/home-business-parallax-bg.webp")`, }} >
                    <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-darkslateblue"></div>
                    <Container className="relative">
                        <Row className="justify-center text-center">
                            <Col xl={7} lg={8} md={10}>
                                <div className="font-serif text-white">
                                    {/* Modal Component Start */}
                                    <CustomModal.Wrapper
                                        modalBtn={
                                            <m.div {...zoomIn}>
                                                <Buttons type="submit" className="btn-sonar border-0 mx-auto mb-14" themeColor="#3452ff" y color="#fff" size="lg" title={<i className="icon-control-play" />} />
                                            </m.div>} >
                                        <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                            <div className="fit-video">
                                                <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/cjCh_kIgUHc?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                            </div>
                                        </div>
                                    </CustomModal.Wrapper>
                                    {/* Modal Component End */}
                                    <m.h4 {...fadeIn} className="font-semibold mb-[45px]" >
                                        Veja como é fácil utilizar a GDPlace
                                    </m.h4>
                                    <m.span {...fadeIn} className="uppercase tracking-[1px]">
                                        O mais completo comparador de preços solar
                                    </m.span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </m.section>
                {/* Info Banner Style 02 End */}

                {/* Section Start */}
                <section className="cover-background py-[130px] relative cover-background lg:py-[90px] md:py-[75px] sm:py-[50px]" style={{ backgroundImage: `url(/assets/img/webp/application-banner-img-02.webp)` }}>
                    <Container>
                        <Row className="items-center justify-center">
                            <Col xs={10} lg={5} xl={4} className="md:mb-[70px] sm:mb-[50px] sm:text-center">
                                <m.h2 className="heading-5 font-serif font-light text-[#262b35] -tracking-[1px] mb-16 md:text-center" {...{ ...fadeIn, transition: { delay: 0.2 } }}>Intuitive dashboard visually rich experience</m.h2>
                                <div className="row flex-col items-start md:text-center">
                                    <m.div className="col" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                                        <span className="font-serif font-medium text-[#262b35] block mb-[10px]">Flexible customization application</span>
                                        <p className="w-[90%] inline-block xs:w-full">Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt magna.</p>
                                    </m.div>
                                    <m.div className="col" {...{ ...fadeIn, transition: { delay: 0.6 } }}><div className="h-[1px] w-full bg-mediumgray my-[40px] xs:my-[30px]"></div></m.div>
                                    <m.div className="col" {...{ ...fadeIn, transition: { delay: 0.7 } }}>
                                        <span className="font-serif font-medium text-[#262b35] block mb-[10px]">Easiest way to control resources</span>
                                        <p className="w-[90%] inline-block xs:w-full">Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt magna.</p>
                                    </m.div>
                                    <m.div className="col mt-[4.5rem] flex md:justify-center" {...{ ...fadeIn, transition: { delay: 1 } }}>
                                        {/* Modal Component Start */}
                                        <CustomModal.Wrapper
                                            modalBtn={
                                                <span className="inline-flex flex-row items-center justify-center">
                                                    <Buttons ariaLabel="modal button" type="submit" className="btn-sonar border-0 mr-[15px]" themeColor={["#bb85f9", "#fb9398"]} color="#fff" size="md" title={<i className="icon-control-play text-lg" />} />
                                                    <span className="relative font-semibold text-darkgray text-base font-serif uppercase inline-block align-middle border-b cursor-pointer border-darkgray"> How it works </span>
                                                </span>
                                            } >
                                            <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                                <div className="fit-video">
                                                    <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                                                </div>
                                            </div>
                                        </CustomModal.Wrapper>
                                        {/* Modal Component End */}
                                    </m.div>
                                </div>
                            </Col>
                            <m.div className="col-xl-5 col-lg-6 offset-xl-3 offset-lg-1" {...fadeInLeft}>
                                <div className="mr-[-30vw] md:mr-0" >
                                    <img src="https://lithoreact.themezaa.com/assets/img/webp/application-img-04.webp" alt="" height={680} width={947} />
                                </div>
                            </m.div>
                        </Row>
                    </Container>
                </section>
                {/* section End */}

                {/* Section Start */}
                <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
                    <Container>
                        <Row className="items-center xs:justify-center">
                            <Col md={12} xl={4} lg={5} className="col-11 pb-28 sm:pb-24 xs:pt-0 relative">
                                <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#975ade] via-[#e05fc4] to-[#ff798e] tracking-[.5px] uppercase inline-block mb-[25px] sm:mb-[15px]">Mobile experience</span>
                                <h2 className="heading-5 font-serif font-light text-[#262b35] tracking-[-.5px] mb-[30px] md:mb-[15px]">We enhance visual display and promote</h2>
                                <p className="w-3/4 mb-[60px] sm:w-full md:mb-[25px]">Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore ut enim ad minim veniam nostrud.</p>
                                <div className="flex swiper-navigation-03 swiper-navigation-light relative">
                                    <div onClick={() => swiperRef.current.swiper.slidePrev()} className="swiper-button-prev relative"></div>
                                    <div onClick={() => swiperRef.current.swiper.slideNext()} className="swiper-button-next ml-[10px] relative"></div>
                                </div>
                            </Col>
                            <m.div lg={7} xl={{ offset: 1 }} className="col-lg-7 offset-xl-1" {...fadeInLeft}>
                                <div className="min-w-[1170px] md:min-w-full">
                                    <Swiper
                                        ref={swiperRef}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        breakpoints={{ 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 } }}
                                        observer={true}
                                        observeParents={true}
                                        keyboard={{ enabled: true, onlyInViewport: true }}
                                        loop={true}
                                        modules={[Autoplay, Keyboard]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false
                                        }}>
                                        {
                                            TestimonialsCarouselData.map((item, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <img src={item.img} alt="screenshots" height="681" width="353" className="w-full sm:mx-auto" />
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </m.div>
                        </Row>
                    </Container>
                </section>
                {/* Section End */}

                {/* Section Start */}
                <m.section className="py-[130px] overflow-hidden bg-gradient-to-b from-[#f7f7f7] via-[#fbfbfb] to-[#fff] lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
                    <Container>
                        <Row className="justify-center">
                            <Col sm={6} xl={5} className="text-center mb-[5.5rem] md:mb-16">
                                <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#975ade] via-[#e05fc4] to-[#ff798e] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">PREDICTABLE PRICING</span>
                                <h2 className="heading-5 font-serif font-light text-darkgray mx-auto sm:mx-0 xs:-tracking-[1px] xs:w-[80%]">We have tailored pricing plans for everyone</h2>
                            </Col>
                        </Row>
                        <PricingTable04 grid="row-cols-1 row-cols-lg-3 justify-center items-center gap-y-10" theme='pricing-table-style-04' className="col-12 col-lg-4 col-md-8" data={pricingTable04} />
                    </Container>
                </m.section>
                {/* Section End */}

                {/* Section Start */}
                <m.section className="bg-gradient-to-b from-[#fff] via-[#fbfbfb] to-[#f7f7f7] border-t border-mediumgray py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
                    <Container>
                        <Row className="justify-center">
                            <Col md={6} xl={5} className="text-center mb-12 sm:mb-4">
                                <span className="font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#975ade] via-[#e05fc4] to-[#ff798e] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">SATISFIED CLIENTS</span>
                                <h2 className="heading-5 font-serif w-[90%] md:w-full font-light text-darkgray -tracking-[1px] mx-auto xs:w-[80%]">Loved by 1000 of most valuable customers</h2>
                            </Col>
                            <TestimonialsCarousel04
                                data={TestimonialsCarouselData4}
                                className="black-move"
                                carouselOption={{
                                    slidesPerView: 1,
                                    loop: true,
                                    breakpoints: { 768: { slidesPerView: 2 } },
                                    navigation: false,
                                    autoplay: { delay: 3000, disableOnInteraction: false }
                                }}
                            />
                        </Row>
                    </Container>
                </m.section>
                {/* Section End */}

                {/* Section Start */}
                <m.section className="pt-0 py-[80px] overflow-hidden bg-lightgray md:py-[75px] sm:py-[50px]" {...fadeIn}>
                    <CarouselDistribuidores />
                </m.section>
                {/* Section End */}

                {/* Footer Start */}
                <FooterStyle10 theme="dark" className="text-slateblue bg-[#262b35]" />
                {/* Footer End */}
            </InViewPort>
        </div>
    )
}

export default ApplicationPage
