import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';

const Cart = () => {
    const[reviews,setReviews] = Usereviews();
    return (
        <div>
            <Container>
                <Row>
                    {
                        reviews.slice(0,6).map(p=><Col md="4" sm="12">
                            <div className='cart-container text-center border border-primary my-3'>
                                 <h5 className='text-center'>Customer Name is : {p.name}</h5><hr />
                                 <p>Customer Review : {p.review}</p>
                                 <h2>Ratting is : {p.ratting}</h2>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cart;