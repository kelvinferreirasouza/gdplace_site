import { Col, Container, Row } from "react-bootstrap";
import { Distribuidores } from "../Marcas/MarcasData";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Marcas from "./Carousel";

const CarouselDistribuidores = () => {
    return (
        <Container>
          <Row>
            <Col className="relative">
              <Marcas
                theme="client-logo-style-05"
                class="swiper-modulo"
                className="swiper-navigation-04 swiper-navigation-light"
                data={Distribuidores}
                animation={fadeIn}
                carousel={true}
                carouselOption={{
                  slidesPerView: 1,
                  loop: false,
                  spaceBetween: 20,
                  autoplay: { delay: 1000, disableOnInteraction: false },
                  navigation: false,
                  breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                }}
              />
            </Col>
          </Row>
        </Container>
    )
}

export default CarouselDistribuidores