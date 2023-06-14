import React, { useState, memo, Fragment } from 'react'

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

// components
import Buttons from '../Button/Buttons'

// Data
import { IconWithTextData_functions } from './IconWithTextData'

// css
import "../../Assets/scss/components/_iconwithtext.scss"

const Funcionalidades = (props) => {
    const [readMore, setReadMore] = useState(false)
    const favoriteData = props.data.filter((data) => data.favorite === true)
    const othersData = props.data.filter((data) => data.favorite === false)
    const showBtnReadMore = props.data.length > 3 ? true : false
    
    const handleReadMode = () => {
        if(readMore === false) setReadMore(true)
        if(readMore === true) setReadMore(false)
    }

    return (
        <Row className={`${props.grid} md:justify-center`}>
            {
                favoriteData.map((item, i) => {
                    return (
                        item.favorite === true && (
                            <Fragment>
                                <m.div key={i} className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
                                    <div className="rounded-md w-full">
                                        {
                                        item.img ? (
                                            <img height={42} width={51} className="inline-block items-center justify-center mb-[30px]" src={item.img} alt="featurebox" />
                                        )
                                            :
                                            item.icon ? (props.theme === "icon-with-text-05" ? <Link aria-label="link for icon" to="#"><i className={item.icon}></i></Link> : <i className={item.icon}></i>
                                            )
                                            :
                                            item.textIcon ? (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                                                :
                                                <span className="text-basecolor inline-block icon-text">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                                        }
            
                                        <div className='feature-box-content'>
                                            {item.title &&
                                                <span className="font-medium title font-serif">{item.title}</span>
                                            }
            
                                            {item.content &&
                                                <p>{item.content}</p>
                                            }
                                        </div>
                                        
                                        {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
                                    </div>
                                </m.div>
        
                                {(showBtnReadMore && i === favoriteData.length - 1 && readMore === false) &&
                                    <div className='w-100'>
                                        <Buttons
                                            type="submit"
                                            ariaLabel="button"
                                            className="mx-[10px] rounded font-medium font-serif uppercase bg-[#fff] hover:text-white" 
                                            size="lg"
                                            color="#2887c5" 
                                            themeColor="#2887c5"
                                            title="Saiba Mais" 
                                            icon="fas fa-plus"
                                            iconPosition="after"
                                            onClick={handleReadMode}
                                        />
                                    </div>
                                }
                            </Fragment>
                        )                                      
                    )
                })
            }

            {othersData.length > 0 && (
                othersData.map((item, i) => (
                    <m.div 
                        key={i}
                        className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}
                        style={{display: readMore === false ? 'none' : ''}}
                    >
                        <div className="rounded-md w-full">
                            {
                                item.img 
                                ? 
                                    (<img 
                                        width={51}
                                        height={42}
                                        className="inline-block items-center justify-center mb-[30px]"
                                        src={item.img}
                                        alt="featurebox"
                                    />)
                                :
                                    item.icon 
                                    ?
                                        (props.theme === "icon-with-text-05"
                                        ?
                                            <Link aria-label="link for icon" to="#">
                                                <i className={item.icon}></i>
                                            </Link>
                                        :
                                            <i className={item.icon}></i>
                                        )
                                    :
                                        item.textIcon 
                                        ?
                                            (<span className="text-basecolor inline-block icon-text">{item.textIcon}</span>)
                                        :
                                            <span className="text-basecolor inline-block icon-text">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
                            }

                            <div className='feature-box-content'>
                                {item.title &&
                                    <span className="font-medium title font-serif">{item.title}</span>
                                }

                                {item.content &&
                                    <p>{item.content}</p>
                                }
                            </div>
                            
                            {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
                        </div>
                    </m.div>
                )
                )
            )}
        </Row>
    )
}

Funcionalidades.defaultProps = {
  data: IconWithTextData_functions,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
}

Funcionalidades.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      linkTitle: PropTypes.string,
      img: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
}


export default memo(Funcionalidades)