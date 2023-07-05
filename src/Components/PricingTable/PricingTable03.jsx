import React, { memo } from 'react'

// Libraries
import { Col, Row } from 'react-bootstrap'

// Components
import Buttons from '../Button/Buttons'

const PriceTable03 = (props) => {
    return (
        <Row className={`pt-[4.5rem] sm:pt-[20px] pb-4 justify-center overflow-hidden ${props.className ? ` ${props.className}` : "" }${props.grid ? ` ${props.grid}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <Col key={i} className={`${props.theme}${(item.popular && item.popular.isPopular) ? " popular" : ""} text-center rounded-md p-[0px] sm:px-[10px]`}>
                            <div className='pricing-wrapper px-[24px]'>
                                {(item.popular && item.popular.isPopular) && <span className='top-head hidden uppercase'>+ VENDIDO</span>}
                                {item.icon && <i className={`${item.icon} text-[50px] text-basecolor inline-block`}></i>}
                                {item.title && <h3 className="font-semibold mt-[5px] text-xmd uppercase font-serif text-[#262b35] mb-[20px] tracking-normal">{item.title}</h3>}
                                {(item.price && item.priceCondition)
                                    ?
                                        <div className='d-flex justify-center align-items-end'>
                                            <h4 className="price-wrap text-[#262b35] mb-0 font-semibold tracking-[-2px] font-serif">{item.price}</h4>

                                            <small className='ml-1 text-[14px]'>
                                                {item.priceCondition}
                                            </small>
                                        </div>
                                    :
                                        <h4 className="price-wrap text-[#262b35] mb-0 font-semibold tracking-[-2px] font-serif">{item.price}</h4>
                                }

                                <ul className="my-[20px] pl-0 mx-0 list-none">
                                    {item.plans && 
                                        item.plans 
                                    }
                                </ul>
                                {
                                    item.buttonLink && (
                                        (item.popular && item.popular.isPopular) ? (
                                            <Buttons ariaLabel="pricing table" to={item.buttonLink} className="btn-fancy font-medium font-serif btn-fill rounded-[2px] uppercase hover:text-[#2887c5] tracking-[0.5px]" color="#fff" size="sm" themeColor="#2887c5" title={item.buttonTitle} />
                                        ) : (
                                            <Buttons ariaLabel="pricing table" to={item.buttonLink} className="btn-fancy font-medium font-serif uppercase btn-transparent rounded-[2px] hover:text-white border-[#dbdbdb]" color="#2887c5" size="sm" themeColor="#2887c5" title={item.buttonTitle} />
                                        )
                                    )
                                }
                            </div>
                        </Col>
                    )
                })
            }
        </Row>

    )
}

export default memo(PriceTable03)
