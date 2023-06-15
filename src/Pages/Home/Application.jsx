import React from 'react'

// Libraries
// import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
// import { Autoplay, Keyboard } from "swiper";
import { m } from 'framer-motion';
import { Link as ScrollTo } from "react-scroll"

// Components
import Buttons from '../../Components/Button/Buttons'
import Typed from 'react-typed';
import { TiltBox } from '../../Components/FancyText/FancyText'
import IconWithText from '../../Components/IconWithText/IconWithText'
import Funcionalidades from '../../Components/IconWithText/Funcionalidades';
import CustomModal from '../../Components/CustomModal'
import FooterStyle10 from '../../Components/Footers/FooterStyle10';
import SideButtons from "../../Components/SideButtons";
import { fadeIn, fadeInBlur, fadeInRight, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import { TextAnime } from '../../Components/FancyText/FancyText';
import Lists from '../../Components/Lists/Lists';
import PricingTable03 from '../../Components/PricingTable/PricingTable03';
// import video from '../../Assets/video/conexoes_redux.mp4'
import TabMarcas from '../../Components/Tab/TabMarcas';
import Counter from '../../Components/Counters/Counter';

// Data
import { pricingTable03MonthData, pricingTable03YearData } from '../../Components/PricingTable/PricingTableData';
import { ListData01 } from '../../Components/Lists/ListsData';
import { IconWithTextData_functions } from '../../Components/IconWithText/IconWithTextData';
import { TabDataMarcas } from '../../Components/Tab/TabData';
import { CounterData03 } from '../../Components/Counters/CounterData';

// function
import InViewPort from '../../Components/InViewPort';
import HeaderGdplace from '../../Components/Header';
// import CarouselDistribuidores from '../../Components/Distribuidores/Carousel';
import WhatsAppFloatingBtn from '../../Components/WhatsApp';

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

const ApplicationPage = (props) => {
    return (
        <div style={props.style}>
            <SideButtons />
            {/* Header Start */}
            <HeaderGdplace type="reverse-scroll" {...props} />
            {/* Header End */}

            <WhatsAppFloatingBtn />

            {/* Section Start */}
            <section className="bg-cover bg-no-repeat overflow-visible bg-center" style={{ backgroundImage: "url('/assets/img/webp/home/banner-background.webp')" }}>
                <Container>
                    <Row className="justify-center sm:text-center">
                        <Col lg={6} xl={5} md={7} sm={8} className="h-[100vh] flex flex-col items-start justify-center pb-40 pt-[10rem] lg:pt-40 lg:pb-32 md:pt-24 md:pb-40 sm:h-auto sm:pb-20 md:h-[650px]">
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

            {/* Section Start */}
            <section className="py-[80px] lg:py-[95px] md:py-[75px] sm:py-[50px] bg-lightgray overflow-hidden">
                <Container className='p-0'>
                    <Row className="items-center">
                        <m.div className="md:mb-[50px] sm:mb-[30px] col-xl-7 col-lg-6 order-lg-1 p-0" {...{ ...fadeInRight, transition: { delay: 0.5, ease: "circOut", duration: 0.6 } }}>
                            <div className='max-w-[668px]'>
                                {/* <video src={video} width="650" height="650" autoPlay={true} muted={true} loop={true}></video> */}
                                <img 
                                    src="/assets/img/webp/what-we-offers-03.webp"
                                    className="shadow-md rounded-[5px] overflow-hidden w-full"
                                    width="405"
                                    // height="945"
                                    alt="what-we-offers"
                                />
                            </div>
                        </m.div>
                        <m.div className="sm:pl-[15px] col-xl-5 col-lg-6 order-lg-2 pr-0" {...fadeIn}>
                            <h5 className="font-serif font-medium text-darkgray leading-[40px] mb-[32px]">
                                <span className="w-100 font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                    SOLUÇÕES PARA O SETOR SOLAR
                                </span>

                                <span className="initial p-0">
                                    Nós desenvolvemos o futuro da energia solar, una-se a nós e economize

                                    <TextAnime
                                        duration={3000}
                                        color={["#083c6c", "#075eb1", "#2c89c6"]}
                                        lineColor="#075eb1"
                                        className="text-left fancy-border-bottom !font-semibold text-darkgray pl-3"
                                        animation="slide"
                                        data={["tempo.", "dinheiro."]} 
                                    />
                                </span>
                            </h5>
                            <p className="mb-[25px]">
                                Otimize seu tempo ao padronizar seus processos, de forma rápida e prática, permitindo que você foque no que realmente importa.
                            </p>

                            <Lists theme="list-style-07" className="" data={ListData01} animation={fadeIn} />

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
                                        title="Saiba Mais" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open('https://sistema.gdplace.com.br/integrador/landingPage', '_blank', 'noopener,noreferrer')
                                        }}
                                    />
                                </ScrollTo>
                            </m.div>
                        </m.div>
                    </Row>
                </Container>

                {/* Section Start */}
                <m.section className="pt-[64px] lg:pt-[54px] md:pt-[64px] sm:pt-[54px] xs:pt-[24px]" {...fadeIn}>
                    <Container>
                        <Counter
                            theme="counter-style-05"
                            grid="items-center justify-center sm:gap-y-10"
                            className="font-serif col-lg-3 col-md-3 col-sm-6 col-xs-1 text-darkgray text-left sm:text-center"
                            data={CounterData03}
                            duration={2}
                            postfix_sign="+"
                        />
                    </Container>
                </m.section>
                {/* Section End */}
            </section>
            {/* Section End */}

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

            {/* Info Banner Style 02 */}
            <m.section
                className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center"
                style={{ backgroundImage: `url("https://lithoreact.themezaa.com/assets/img/webp/home-business-parallax-bg.webp")`, }}
            >
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

            {/* Lazy Load HTML */}
            <InViewPort>
                {/* Section Start */}
                <section className="bg-lightgray py-[80px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
                    <Container>
                        <Row>
                            <Col className="mb-[6%]">
                                <span className="w-100 text-center font-serif font-medium text-md text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6] tracking-[.5px] uppercase inline-block mb-[20px] sm:mb-[10px]">
                                    Funcionalidades
                                </span>
                                <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px] m-0">
                                    Por que você deve escolher a GDPlace
                                </h6>
                            </Col>
                        </Row>
                        <Funcionalidades
                            grid="row-cols-1 row-cols-lg-3 row-cols-sm-2 text-center gap-y-10"
                            theme="icon-with-text-06"
                            data={IconWithTextData_functions}
                            animation={fadeIn}
                            animationDelay={0.2}
                        />
                    </Container>
                </section>
                {/* Section End */}

                {/* Section Start */}
                <m.section 
                    className="py-[80px] relative lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white"
                    {...fadeIn}
                >
                    <Container>
                        <Row className="justify-center">
                            <Col md={12} className="text-center mb-[4%]">
                                <h6 className="heading-5 font-serif font-light text-[#262b35]">
                                    Marcas Disponíveis
                                </h6>
                            </Col>
                        </Row>

                        <TabMarcas data={TabDataMarcas} />
                    </Container>
                </m.section>
                {/* Section End */}

                {/* Section Start */}
                <section className="pb-[105px] pt-[40px] lg:pb-[90px] md:pb-[75px] md:pt-0 sm:py-[50px] text-center bg-lightgray">
                    <Container>
                        <Row className="justify-center">
                        <Col xl={5} lg={6} sm={7}>
                            <span className="font-serif font-medium text-basecolor text-xmd block mb-[20px] sm:mb-[10px]">Simple pricing packages</span>
                            <h2 className="heading-5 font-serif text-darkgray text-center inline-block font-semibold mb-28 tracking-[-1px] md:mb-16">Choose one of our plans get access to plugins for free</h2>
                        </Col>
                        </Row>
                        <Container fluid className="switch-tab">
                        <Tabs defaultActiveKey="monthly">
                            <Tab eventKey="monthly" title="MONTHLY" className="mr-[-2px]">
                            <Container fluid>
                                <Row className="justify-center">
                                <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                                    <PricingTable03 grid="row row-cols-1 gap-y-10 row-cols-md-3 items-center" theme="pricing-table-style-03" className="pb-[15px]" data={pricingTable03MonthData} />
                                </Col>
                                </Row>
                            </Container>
                            </Tab>
                            <Tab eventKey="yearly" title="YEARLY">
                            <Container fluid>
                                <Row className="justify-center">
                                <Col className="col-12 col-xl-10 col-lg-11 tab-style-04">
                                    <PricingTable03 grid="row row-cols-1 row-cols-md-3 gap-y-10 items-center" theme="pricing-table-style-03" className="pb-[15px]" data={pricingTable03YearData} />
                                </Col>
                                </Row>
                            </Container>
                            </Tab>
                        </Tabs>
                        </Container>
                    </Container>
                </section>
                {/* Section End */}

                {/* Footer Start */}
                <FooterStyle10 theme="dark" className="text-slateblue bg-[#262b35]" />
                {/* Footer End */}
            </InViewPort>
        </div>
    )
}

export default ApplicationPage
