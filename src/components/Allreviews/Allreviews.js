import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';

const Allreviews = () => {
    const[reviews,setReviews] = Usereviews();
    return (
        <div>
            <Container>
                <Row>
                    {
                        reviews.map(p=><Col className='mt-3 py-3 px-3' md="4" sm="12">
                            <div className='cart-container text-center border border-primary'>
                                 <h5 className='text-center'>Product : {p.name}</h5><hr />
                                 <p>Supplier : {p.supplier}</p>
                                 <h2>Price : {p.price}</h2>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Allreviews;