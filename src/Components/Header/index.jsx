import { Navbar, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header, { HeaderNav, Menu, MobileMenu } from '../../Components/Header/Header';
import { Link as ScrollTo } from "react-scroll"
import Buttons from '../Button/Buttons';

const HeaderGdplace = (props) => {
    return (
        <Header topSpace={{ md: true }} type={props.type ? props.type : 'reverse-scroll'} fixed={props.fixed ? props.fixed : false }>
            <HeaderNav fluid="fluid" theme="dark" menu="light" className="application-header px-[35px] py-[0px] pr-[50px] md:px-0 md:py-[18px] sm:px-0 xs:py-[15px]" containerClass="sm:px-0">
                <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                    <Link aria-label="header logo" className="flex items-center" to="/">
                        <Navbar.Brand className="inline-block p-0 m-0">
                            <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo_gdplace_branco.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                            <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo_gdplace.webp' data-rjs='/assets/img/webp/logo-gradient-light-purple-light-red@2x.webp' alt='logo' />
                            <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo_gdplace.webp' data-rjs='/assets/img/webp/logo-gradient-light-purple-light-red@2x.webp' alt='logo' />
                        </Navbar.Brand>
                    </Link>
                </Col>
                <Menu className="col-auto md:hidden" {...props} />
                <MobileMenu className="order-last d-lg-none" type="modern" {...props} />
                <Col className="col-auto text-end pe-0 font-size-0 pl-[15px] sm:hidden">
                    <ScrollTo href='#' to="download" offset={0} delay={0} spy={true} smooth={true} duration={800} className="nav-link section-link">
                        <Buttons 
                            type="button"
                            aria-label="download section"
                            className="rounded -mr-[15px] md:mr-0 font-medium font-serif uppercase md:mb-0"
                            themeColor={["#0b7dee", "#003b77"]} 
                            size="xs"
                            color="#fff"
                            title="Acessar Sistema" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('https://sistema.gdplace.com.br/', '_blank', 'noopener,noreferrer')
                            }}
                        />
                    </ScrollTo>
                </Col>
            </HeaderNav>
        </Header>
    )
}

export default HeaderGdplace