import { Col, Container, Row } from "react-bootstrap";
import { MarcasInversores } from "../Marcas/MarcasData";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Marcas from "../Marcas/Carousel";

const CarouselInversores = () => {
    return (
        <Container>
          <Row>
            <Col className="relative">
              <Marcas
                theme="client-logo-style-05"
                class="swiper-inversor"
                className="swiper-navigation-04 swiper-navigation-light"
                data={MarcasInversores}
                animation={fadeIn}
                carousel={true}
                carouselOption={{
                  slidesPerView: 1,
                  loop: true,
                  spaceBetween: 20,
                  autoplay: { delay: 3000, disableOnInteraction: false },
                  navigation: false,
                  breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 3 } }
                }}
              />
            </Col>
          </Row>
        </Container>
    )
}

export default CarouselInversores