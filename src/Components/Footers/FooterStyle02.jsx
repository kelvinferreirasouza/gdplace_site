import React, { memo } from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PropTypes } from "prop-types";

// components
import SocialIcons from '../SocialIcon/SocialIcons'
import FooterMenu, { Footer } from './Footer';

// Data
import FooterData from './FooterData'

const iconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
    {
        color: "#828282",
        link: "https://dribbble.com/",
        icon: "fab fa-linkedin"
    },
    {
        color: "#828282",
        link: "https://dribbble.com/",
        icon: "fab fa-youtube"
    },
]

const FooterStyle02 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[8%] md:pb-0 xs:py-[8%]">
                <Container>
                    <Row className="md:text-start justify-start">
                        <Col lg={{ span: 3, order: 0 }} md={5} sm={{ span: 6, order: 1 }} className="md:mb-[50px] xs:mb-[25px]">
                            <Link aria-label="link" to="/" className="mb-[20px] block">
                                <img alt="logo" src={props.logo} width="140" height="36" />
                            </Link>
                            <p className="w-[80%] mb-[20px] xs:w-full">
                                Nós desenvolvemos o futuro da energia solar, una-se a nós e economize tempo e dinheiro.
                            </p>
                            <SocialIcons theme="social-icon-style-01" className="justify-start" size="xs" iconColor={props.theme === "dark" ? "light" : "dark"} data={iconData} />
                        </Col>
                        <FooterMenu className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" data={FooterData.slice(0, 3)} lg={{ span: 2, order: 0 }} sm={{ span: 4, order: 3 }} titleClass="capitalize" />
                        <Col lg={3} sm={6} className="xs:mb-[25px]">
                            <span className="mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]">
                                Contato
                            </span>
                            <p className="w-[85%] mb-[15px]">
                                Rua Atanazio Antonio Bernardes, nº 831, Tijucas/SC
                            </p>
                            <div><i className="feather-phone-call text-sm mr-[10px] text-themecolor"></i>+55 48 99175-0930</div>
                            <div><i className="feather-mail text-sm mr-[10px] text-themecolor"></i><a aria-label="mail" href="mailTo:contato@gdplace.com.br">contato@gdplace.com.br</a></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom py-[35px] border-t border-[#ffffff1a]">
                <Container>
                    <Row>
                        <Col md={6} className="md:mb-[0.75rem] xs:mb-[15px]">
                            <ul className="flex sm:justify-center md:justify-start xs:flex-col">
                                <li className="mr-[35px] md:mr-[20px] xl:mb-0 xs:mb-[7px]"><Link aria-label="link" to="#">
                                    Política de Privacidade
                                </Link></li>
                                <li className="xl:mb-0"><Link aria-label="link" to="#">Termos de uso</Link></li>
                            </ul>
                        </Col>
                        <Col md={6} className="text-right sm:text-center xs:text-left">
                            <span className="inline-block">&copy; {new Date().getFullYear()} GDPlace - Todos os direitos reservados. Desenvolvido por <a aria-label="allecode" rel="noreferrer" href="https://www.themezaa.com/" target="_blank" className="text-themecolor underline underline-offset-4"> Kelvin Souza</a></span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Footer>
    )
}

FooterStyle02.defaultProps = {
    data: FooterData,
    logo: "/assets/img/webp/logo_gdplace_branco.webp"
}

FooterStyle02.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle02)