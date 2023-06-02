import { Col, Container, Row } from "react-bootstrap";
import Clients from "../Clients/Clients";
import { fadeIn } from "../../Functions/GlobalAnimations";

import { ClientData02 } from "../Clients/ClientsData";

const CarouselDistribuidores = () => {
    return (
        <Container>
          <Row>
            <Col md={12} xl={12} className="text-center mb-12 sm:mb-4">
              <h2 className="heading-5 font-serif w-[90%] md:w-full font-light text-darkgray -tracking-[1px] xs:w-[80%] text-left m-0">
                Nossos Distribuidores
              </h2>
            </Col>
            <Col className="relative">
              <Clients
                theme="client-logo-style-03"
                className="swiper-navigation-04 swiper-navigation-light"
                data={ClientData02}
                animation={fadeIn}
                carousel={true}
                carouselOption={{
                  slidesPerView: 1,
                  loop: true,
                  spaceBetween: 20,
                  autoplay: { delay: 3000, disableOnInteraction: false },
                  navigation: true,
                  breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                }}
              />
            </Col>
          </Row>
        </Container>
    )
}

export default CarouselDistribuidores