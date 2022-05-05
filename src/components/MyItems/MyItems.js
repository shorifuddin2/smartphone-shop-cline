import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';

const MyItems = () => {
  
        const [inventory,setInventory] = UseInventory();
    return (
        <div>
            <Container>
                <Row>
                    {
                        inventory.map(product=><Col className='mt-3 py-5 px-3 '  md="4" sm="12">
                            <div className='cart-container text-center  Larger shadow rounded-3'>
                            <img className='w-100' src={product.img}/>
                                 <h5 className='text-center'>Product : {product.name}</h5>
                                 <p>Supplier : {product.supplier}</p>
                                 <p>quantity : {product.quantity}</p>
                                 <p>Sold : {product.sold}</p>
                                 <p>Description : {product.description}</p>
                                 <h2>Price : ${product.price}</h2>

                                 <div className='text-center my-2 update-button'>
                                <Link className='p-2 bg-danger text-light' to=''>Delete</Link>
                                <Link className='p-2 bg-warning' to=''>Delivery</Link>
                                </div>
                                

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyItems;