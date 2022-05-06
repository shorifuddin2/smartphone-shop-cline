import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';
import Product from '../Product/Product';
import Produc2 from '../Product/Product2';


// use hooks
const Home = () => {
    const[inventory,setInventory] = UseInventory();
   
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
                 <Product></Product>
                 
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/inventory'>See All Inventory</Link>
             
             </div>

             <Row>
                 <h2 className='web-title text-primary text-center py-5'>Product Items</h2>
                   <Produc2></Produc2>
                 
               </Row>
        </div>
    );
};

export default Home;