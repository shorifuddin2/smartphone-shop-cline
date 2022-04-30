import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/Usereviews';
import './Home.css';
import img from '../../Image/r15.jpg';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

// use hooks
const Home = () => {
    const[reviews,setReviews] = Usereviews();
   
    return (
        <div>
          
          <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/0mLMyYL/banner-2.png"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/k3n6xjv/banner-3.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
<Container>


              
                
               <Row>
                 <h2 className='web-title text-primary text-center py-5'>Client review</h2>
                   <Cart></Cart>
                 
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/review'>See All Reviews</Link>
             </div>
        </div>
    );
};

export default Home;