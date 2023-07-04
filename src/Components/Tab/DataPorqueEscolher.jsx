import { Col, Container, Row } from "react-bootstrap";
import { fadeIn } from "../../Functions/GlobalAnimations";
import { m } from 'framer-motion';
import CustomModal from "../CustomModal";
import Buttons from "../Button/Buttons";

const DataPorqueEscolher = (props) => {
    console.log(props)
    return (
        <m.section 
            className="relative bg-white pt-[40px] border-t"
            {...fadeIn}
        >
            <Container>
                <Row>
                    <Col md={6} className="sm:mb-[40px] pl-0 pr-[38px]">
                        <m.h6 className="font-serif text-darkgray font-medium mb-4" {...fadeIn}>
                            {props.title}
                        </m.h6>

                        <div className="text-[14px]">
                            {props.content}
                        </div>

                        <Buttons
                            ariaLabel="button"
                            className="txt-16px font-serif btn-link mt-2" 
                            color="#083c6c" 
                            to={props.buttonLink}
                            title={props.buttonTitle} 
                            icon="fas fa-arrow-right right-icon"
                            iconPosition="after"
                        />
                    </Col>
                    
                    <Col
                        lg={{ span: 6 }}
                        md={6}
                        className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center pr-0"
                    >
                        <m.section {...fadeIn}>
                            <Container>
                                <Row className='justify-center'>
                                    <Col lg={12} className='relative p-0'>
                                        <img width="" height="" className="w-full h-auto align-middle" src='/assets/img/webp/home-travel-agency-about.webp' alt="" />
                                        <span className="absolute top-0 left-0 w-full h-full justify-center items-center flex z-0">

                                        {/* Modal Component Start */}
                                        <CustomModal.Wrapper
                                            modalBtn={
                                                <Buttons 
                                                    type="submit"
                                                    className="btn-sonar border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                                                    themeColor="#fff"
                                                    color="#ff7a56"
                                                    size="lg"
                                                    title={<i className="icon-control-play" />} 
                                                />
                                            }
                                        >
                                            <div className="w-[1020px] max-w-full relative rounded mx-auto">
                                                <div className="fit-video">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        controls
                                                        src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1"
                                                        title="YouTube video player"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </CustomModal.Wrapper>
                                        {/* Modal Component End */}
                                    </span>
                                    </Col>
                                </Row>
                            </Container>
                        </m.section>
                    </Col>
                </Row>
            </Container>
        </m.section>
    )
}

export default DataPorqueEscolher