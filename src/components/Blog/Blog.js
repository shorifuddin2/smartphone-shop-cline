import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4">
                        <h3>What is Contex Api? </h3>
                        <p>contex Api maintains saying. If we have to write props again and again to send data from parent components to child components through props. Which is a lot of jamela. And we can use Context API to solve this problem. Tree's moth data can access child components directly from any parent components</p>
                    </Col>
                    <Col md="4">
                        <h3>What is semantic tag? </h3>
                        <p>A semantic tag means that when you see a tag, you can understand what is inside it. Such as img tag, table tag, footer tag etc. Again, non-semantic tags mean that there is no market way to look at the tags. Such as span tag div tag etc. These semantics play a very important role in defining one and a half different parts of the developer </p>
                    </Col>
                    <Col md="4">
                        <h3>what is the defferent of block element and inline block </h3>
                        <p>HTML does not block a single line even if the elements are placed next to other elements. They are called inline block elements. Such as div tag, p tag, h1-h6 tag etc</p>
                        <p>Even if the elements are not placed next to other elements, New does not block a line. Sitting in the same line. They are called inline elements. E.g. a tag, span tag etc </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;