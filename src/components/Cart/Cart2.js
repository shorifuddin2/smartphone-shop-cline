import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseInventory2 from '../../hooks/UseInventory2';



const Cart2 = () => {
    const[inventory,setInventory] = UseInventory2();
    return (
        <div>
            <Container>
                <Row>
                    {
                        inventory.slice(0,6).map(product=><Col md="4" sm="12">
                            <div className='cart-container text-center border border-primary my-5 Larger shadow rounded-3'>
                                <img className='w-50' src={product.img}/>
                                 <h5 className='text-center'>Name : {product.name}</h5>
                                 <p>Supplier : {product.supplier}</p>
                                 <h2>Price : {product.price}</h2>
                                 <p>{product.description}</p>
                                 <div className='text-center my-2 update-button'>
                                <Link  to='/inventory'>Update</Link>
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Cart2;