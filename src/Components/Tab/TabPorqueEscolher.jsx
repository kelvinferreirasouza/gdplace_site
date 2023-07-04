import React, { memo, useState } from 'react'

// Libraries
import { Col, Tab, Row, Nav } from 'react-bootstrap'
import { PropTypes } from "prop-types";

// Data
import { TabDataPorqueEscolher } from './TabData'

const TabPorqueEscolher = (props) => {
    const [tabActive, setTabActive] = useState(0)

    return (
        <Tab.Container>
            <Row>
                <Col sm={12} className='p-0'> 
                    <Nav 
                        variant="pills"
                        activeKey={tabActive}
                        className="tab-style-01 tabPorqueEscolher font-serif flex bg-transparent border-b-0 font-medium text-center justify-between"
                    >
                        {props.data.map((item, i) => (
                            <Nav.Item className='tab-style-01' onClick={() => setTabActive(i)}>
                                <Nav.Link className={`d-flex ${tabActive === i ? 'active' : ''}`} eventKey={i}>
                                    <span className='tab-number'>{item.tabNumber}</span>
                                    <span className='tab-text'>{item.tabTitle}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={12} className='mx-auto p-0'>
                    <Tab.Content className='mb-[40px]' activeKey={0}>
                        {props.data.map((item, i) => (
                            <Tab.Pane
                                key={i}
                                eventKey={i}
                                className={`${tabActive === i ? 'active show' : ''}`}
                            >
                                {item.content}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

TabPorqueEscolher.defaultProps = {
    data: TabDataPorqueEscolher
}

TabPorqueEscolher.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            tabTitle: PropTypes.string,
            subtitle: PropTypes.string,
            title: PropTypes.string,
            img: PropTypes.string,
            content: PropTypes.string,
            buttonLink: PropTypes.string,
            buttonTitle: PropTypes.string,
            tabicons: PropTypes.string
        })
    ),
}


export default memo(TabPorqueEscolher)