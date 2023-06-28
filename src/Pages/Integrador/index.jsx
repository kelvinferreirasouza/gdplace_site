import React from 'react'

// Libraries
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import { m } from 'framer-motion';

// Components
import Buttons from '../../Components/Button/Buttons'
import IconWithText from '../../Components/IconWithText/IconWithText'
import CustomModal from '../../Components/CustomModal'
import FooterStyle02 from '../../Components/Footers/FooterStyle02';
import SideButtons from "../../Components/SideButtons";
import { fadeIn, fadeInRight, fadeInLeft, zoomIn } from "../../Functions/GlobalAnimations";
import PricingTable03 from '../../Components/PricingTable/PricingTable03';

import Funcionalidade from '../../Components/Team/Funcionalidade';

// Data
import { pricingTable03MonthData, pricingTable03YearData } from '../../Components/PricingTable/PricingTableData';
import { IconWithTextData_functions } from '../../Components/IconWithText/IconWithTextData';

// function
import InViewPort from '../../Components/InViewPort';
import HeaderGdplace from '../../Components/Header';
import WhatsAppFloatingBtn from '../../Components/WhatsApp';
import BannerTopVideo from './BannerTopVideo';
import MarcasDisponiveis from '../Home/MarcasDisponiveis';
import Parceiros from './Parceiros';

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
    return (
        <div style={props.style}>
            <SideButtons />

            <HeaderGdplace type="reverse-scroll" {...props} />

            <WhatsAppFloatingBtn />

            <BannerTopVideo />

            {/* Section Start */}
            <m.section className="pt-[130px] lg:pt-[90px] md:pt-[75px] xs:pt-[50px] overflow-hidden" {...fadeIn}>
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
                                Funcionalidades
                            </span>
                            <h6 className="font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px] m-0">
                                Por que você deve escolher a GDPlace
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

                <MarcasDisponiveis />                    

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
            </InViewPort>

            <Parceiros />

            {/* Footer Start */}
            <FooterStyle02 theme="dark" className="text-slateblue bg-[#262b35]" />
            {/* Footer End */}
        </div>
    )
}

export default IntegradorPage
