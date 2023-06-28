import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { m } from 'framer-motion';
import { Link as ScrollTo } from "react-scroll"

// Components
import { fadeIn } from "../../Functions/GlobalAnimations";
import TabMarcas from '../../Components/Tab/TabMarcas';

// Data
import { TabDataMarcas } from '../../Components/Tab/TabData';

const MarcasDisponiveis = () => {
    return (
        <m.section 
            className="py-[100px] relative lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white"
            {...fadeIn}
        >
            <Container>
                <Row className="justify-center">
                    <Col md={12} className="text-center mb-[4%]">
                        <h5 className="font-serif text-darkgray font-medium -tracking-[1px] m-[0px] sm:mb-[16px]">
                            Marcas Disponíveis
                        </h5>
                    </Col>
                </Row>

                <TabMarcas data={TabDataMarcas} />

                <Row>
                    <Col className="text-center mt-[40px] lg:mt-16">
                        <m.span className="font-serif text-darkgray text-lg text-center" {...fadeIn}>
                            Ficou interessado em trabalhar conosco?&nbsp;

                            <ScrollTo
                                to="pricing"
                                offset={0}
                                delay={0}
                                spy={true}
                                smooth={true}
                                duration={800}
                                className="font-semibold inline-block text-decoration-line-bottom text-darkgray hover:text-darkgray cursor-pointer"
                            >
                                Comece agora mesmo    
                            </ScrollTo>
                        </m.span>
                    </Col>
                </Row>
            </Container>
        </m.section>
    )
}

export default MarcasDisponiveis
