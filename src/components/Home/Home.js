import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../hooks/UseInventory';
import './Home.css';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import Cart2 from '../Cart/Cart2';

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
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
<Container>


              
                
               <Row>
                 <h2 className='web-title text-primary text-center py-5'>Inventory Items</h2>
                   <Cart></Cart>
                 
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/inventory'>See All Inventory</Link>
             </div>

             <Row>
                 <h2 className='web-title text-primary text-center py-5'>Product Items</h2>
                   <Cart2></Cart2>
                 
               </Row>
        </div>
    );
};

export default Home;