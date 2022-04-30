import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';
import Allreviews from '../Allreviews/Allreviews';

const Reviews = () => {
    const[reviews,setReviews] = Usereviews();
    return (
        <div>
            <Container>
                <Row>
                    <Allreviews></Allreviews>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;