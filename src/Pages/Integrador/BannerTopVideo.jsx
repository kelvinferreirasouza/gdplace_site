import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'

// Components
import Videos from '../../Components/Videos/Videos'
import video from '../../Assets/video/video.mp4'

const BannerTopVideo = () => {
  return (
      <Videos
        className="py-[160px] pb-0 xl:py-[120px] md:py-[95px] sm:py-[80px] xs:py-0 h-[700px] md:h-[550px] sm:h-[350px]"
        src={video}
        loop={true}
        poster="https://lithoreact.themezaa.com/assets/video/video.mp4"
        overlay={["#0039e3", "#4132e0", "#4132e0", "#741bd9", "#8600d4"]}
        opacity="0.8">
        <Container className="h-full">
          <Row className="items-end justify-center h-full">
            <Col xl={6} lg={7} md={10} className="relative z-[2] text-center">
              <span className="mb-[5px] font-serif text-white opacity-60 block">
                Bem vindo Integrador
              </span>
              <h1 className="text-white font-serif font-medium text-[42px] leading-[49px] mb-20 sm:mb-12 sm:text-[30px] sm:leading-[40px] xs:text-[20px]">
                Integrador Solar
              </h1>
              <span className="w-[1px] h-[80px] inline-block mb-20 sm:mb-12 sm:h-[50px]"></span>
            </Col>
          </Row>
        </Container>
      </Videos>
  )
}

export default BannerTopVideo
