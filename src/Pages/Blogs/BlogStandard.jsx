import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form } from "formik"
import { m } from 'framer-motion'

// Components
import BlogStandard from '../../Components/Blogs/BlogStandard'
import { Input } from '../../Components/Form/Form'
import { resetForm } from '../../Functions/Utilities';
import { fadeIn } from '../../Functions/GlobalAnimations'
import HeaderGdplace from '../../Components/Header';
import FooterStyle10 from '../../Components/Footers/FooterStyle10';

// Data
import { blogData } from '../../Components/Blogs/BlogData'

// Filter the blog data category wise
const blogStandardData = blogData.filter((item) => item.blogType === "standard");

const BlogStandardPage = (props) => {
    return (
        <>
            <HeaderGdplace type="reverse-scroll" {...props} />

            <m.div className="md:flex md:items-center overflow-hidden relative md:h-[465px] sm:h-[350px] xs:h-[357px]" {...fadeIn}>
                <Parallax className="lg-no-parallax bg-cover cover-background absolute left-0 h-[120vh] top-[60px] lg:h-[64vh] lg:top-[-46px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-[-44px] sm:h-[49vh] xs:top-0 xs:h-[40vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(https://lithoreact.themezaa.com/assets/img/webp/contact-us-classic-bg-1.webp)` }}></Parallax>
                <div className="absolute h-full w-full opacity-75 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
                <Container className="h-full relative">
                    <Row className="justify-center h-full">
                        <Col xl={6} lg={7} md={10} className="text-center flex h-[560px] lg:h-[480px] md:h-[450px] sm:h-[350px] justify-center flex-col font-serif">
                            <span className="inline-block opacity-60 mb-[5px] text-white">
                                Blog - GDPlace
                            </span>
                            <h1 className="text-white text-[42px] leading-[49px] sm:text-[30px] sm:leading-10 font-medium mb-0">
                                Últimas Novidades
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </m.div>

            <m.section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col lg={8} className="md:mb-[60px] sm:mb-[40px]">
                            <BlogStandard pagination={true} data={blogStandardData} animation={fadeIn} />
                        </Col>
                        <Col xl={{ span: 3, offset: 1 }} lg={4} md={7}>
                            <div className="inline-block w-full mb-20">
                                <span className='mb-[25px] font-medium text-darkgray text-lg font-serif block'>
                                    Buscar
                                </span>
                                <div className="relative">
                                    <Formik
                                        initialValues={{ email: '' }}
                                        validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required."), })}
                                        onSubmit={async (values, actions) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            resetForm(actions)
                                        }}
                                    >
                                        {({ isSubmitting, status }) => (
                                            <div className="relative">
                                                <Form className="relative">
                                                    <Input showErrorMsg={false} type="email" name="email" className="border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent" placeholder="Enter your keyword..." />
                                                    <button type="submit" className={`text-xs text-fastblue tracking-[1px] py-[15px] absolute top-[8%] right-0 px-[20px] uppercase${isSubmitting ? " loading" : ""}`}><i className="feather-search"></i></button>
                                                </Form>
                                            </div>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div className='mb-20 xs:mb-[35px]'>
                                <m.span className='mb-[35px] font-medium font-serif text-darkgray text-lg block' {...fadeIn}>
                                    Categorias
                                </m.span>
                                <m.ul className='pl-0' {...fadeIn}>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Entertainment</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>10</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Business</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>05</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Creative</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>03</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Lifestyle</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>02</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Fashion</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>19</span>
                                    </li>
                                    <li className='relative inline-block w-full leading-[18px] mb-0'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Design</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>21</span>
                                    </li>
                                </m.ul>
                            </div>
                            <div className='mb-20 xs:mb-[35px]'>
                                <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>
                                    Postagens Recentes
                                </span>
                                <ul>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.2 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-01">
                                                <img height="" width="" src="https://via.placeholder.com/940x940" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-01" className='mb-[5px] font-medium text-darkgray inline-block'>Fashion is anything</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.4 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-02">
                                                <img height="" width="" src="https://via.placeholder.com/800x800" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-02" className='mb-[5px] font-medium text-darkgray inline-block'>Design transcends</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.6 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-03">
                                                <img height="" width="" src="https://via.placeholder.com/800x800" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-03" className='mb-[5px] font-medium text-darkgray inline-block'>Never give in except</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </m.section>

            {/* Footer Start */}
                <FooterStyle10 theme="dark" className="text-slateblue bg-[#262b35]" />
            {/* Footer End */}
        </>
    )
}

export default BlogStandardPage