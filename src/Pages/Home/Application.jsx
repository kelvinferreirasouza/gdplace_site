import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { m } from 'framer-motion';
import { Link as ScrollTo } from "react-scroll"

// Components
import Buttons from '../../Components/Button/Buttons'
import Typed from 'react-typed';
import { TiltBox } from '../../Components/FancyText/FancyText'
import CustomModal from '../../Components/CustomModal'
import FooterStyle02 from '../../Components/Footers/FooterStyle02';
import SideButtons from "../../Components/SideButtons";
import { fadeIn, fadeInBlur, fadeInLeft, fadeInRight, zoomIn } from "../../Functions/GlobalAnimations";
import { TextAnime } from '../../Components/FancyText/FancyText';
import Lists from '../../Components/Lists/Lists';
import video from '../../Assets/video/conexoes_redux.mp4'
import Counter from '../../Components/Counters/Counter';
import InViewPort from '../../Components/InViewPort';

// Data
import { ListData01 } from '../../Components/Lists/ListsData';
import { CounterData01 } from '../../Components/Counters/CounterData';

// function
import HeaderGdplace from '../../Components/Header';
import WhatsAppFloatingBtn from '../../Components/WhatsApp';
import MarcasDisponiveis from './MarcasDisponiveis';

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
            <section className="pt-[100px] lg:py-[95px] md:py-[75px] sm:py-[50px] bg-white overflow-hidden">
                <Container>
                    <Row className="pb-[100px] items-center">
                        <m.div className="md:mb-[50px] sm:mb-[30px] col-xl-7 col-lg-6 order-lg-1 p-0" {...{ ...fadeInRight, transition: { delay: 0.5, ease: "circOut", duration: 0.6 } }}>
                            <div className='max-w-[668px] md:mx-auto'>
                                <video
                                    src={video}
                                    width="650"
                                    height="650"
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                ></video>
                                {/* <img 
                                    src="/assets/img/webp/what-we-offers-03.webp"
                                    className="shadow-md rounded-[5px] overflow-hidden w-full"
                                    width="405"
                                    // height="945"
                                    alt="what-we-offers"
                                /> */}
                            </div>
                        </m.div>
                        <m.div className="sm:pl-[15px] col-xl-5 col-lg-6 order-lg-2 pr-0" {...fadeIn}>
                            <h5 className="font-serif font-medium text-darkgray leading-[40px] mb-[16px]">
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

                            <p className="mb-[24px]">
                                Otimize seu tempo ao padronizar seus processos, de forma rápida e prática, permitindo que você foque no que realmente importa.
                            </p>

                            <Lists theme="list-style-07 mb-[16px]" className="" data={ListData01} animation={fadeIn} />

                            <m.div
                                {...{ ...fadeInBlur, transition: { delay: 1.2, ease: "easeInOut" } }}
                                className="sm:w-[100%] sm:items-center mt-[28px]"
                            >
                                <ScrollTo
                                    href='#' 
                                    to="download"
                                    offset={0}
                                    delay={0}
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    className="sm:contents2 w-100"
                                >
                                    <Buttons 
                                        to="/integrador"
                                        className="mr-[25px] sm:mr-[6px] btn-fill btn-fancy rounded-[2px] font-medium font-serif uppercase md:mb-[15px] xs:mb-0" 
                                        themeColor="#075eb1" 
                                        color="#fff" 
                                        size="sm" 
                                        icon="fas fa-wrench"
                                        iconPosition="before"
                                        title="Sou Integrador"
                                    />

                                    <Buttons 
                                        to="/distribuidor"
                                        className="btn-fill btn-fancy rounded-[2px] font-medium font-serif uppercase md:mb-[15px] xs:mb-0" 
                                        size="sm" 
                                        color="#232323"
                                        icon="fas fa-truck"
                                        iconPosition="before"
                                        title="Sou Distribuidor" 
                                    />
                                </ScrollTo>
                            </m.div>
                        </m.div>
                    </Row>
                </Container>

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

                <section className="py-[100px] overflow-hidden bg-[#f0f0f0] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                    <Container>
                        <Row className="justify-center mb-3">
                            <m.div className="col-xl-7 col-lg-7 col-sm-8 text-center" {...fadeIn}>
                                <span 
                                    className="inline-block font-serif text-md uppercase mb-[20px] font-medium text-gradient bg-gradient-to-r from-[#083c6c] via-[#075eb1] to-[#2c89c6]"
                                >
                                    Não fique para traz
                                </span>

                                <h3 
                                    className="w-full font-semibold text-darkgray font-serif heading-5 mb-[4%]"
                                >
                                    Vamos juntos alavancar seu negócio?
                                </h3>
                            </m.div>
                        </Row>
                        <Row className="items-center justify-center">
                            <Col xl={4} lg={5} md={7}>
                                <Counter
                                    as="h5"
                                    theme="counter-style-04"
                                    grid="d-flex justify-content-center flex-column gap-[40px]"
                                    className="text-black p-0 w-[80%] mx-auto"
                                    duration={7}
                                    data={CounterData01}
                                    postfix_sign="+" 
                                />
                            </Col>
                            <Col
                                lg={{ span: 6, offset: 1 }}
                                className="icon-with-texts relative flex items-center md:justify-center"
                            >
                                <m.div 
                                    {...{ ...fadeInLeft, transition: { delay: 0.5, ease: "circOut", duration: 0.6 } }}
                                >
                                    <img className="w-full mx-auto" width={476} height={652} src='https://lithoreact.themezaa.com/assets/img/webp/home-design-agency-img-transparent-01.webp' alt="" />
                                </m.div>
                            </Col>                            
                        </Row>
                    </Container>
                </section>
            </section>
            {/* Section End */}

            <InViewPort>
                <MarcasDisponiveis />
            </InViewPort>

            {/* Footer Start */}
            <FooterStyle02 theme="dark" className="text-slateblue bg-[#262b35]" />
            {/* Footer End */}
            
        </div>
    )
}

export default ApplicationPage
