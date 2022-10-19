
import React from 'react'
import { Col, Row } from 'reactstrap'
import { Filter } from 'react-feather';

const Alltabs = () => {
    return (
        <div>
            <Row>
                <Col sm-6>
                    <div className='d-flex align-items-center ml-1'>
                        <p>Showing best results for</p>
                        <h3 className='mt-3'>“Cillian Murphy”</h3>
                    </div>
                </Col>
                <Col sm-6 className='d-flex justify-content-end'>
                    <div className='d-flex filterSec'>
                        <Filter />
                        <p>Filter</p>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Alltabs