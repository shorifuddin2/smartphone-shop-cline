import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';

const MyItems = () => {
  
        const [inventory,setInventory] = UseInventory();

        const handleDelete = id =>{
            const proceed = window.confirm('Are you sure?');
            if(proceed){
                const url = `http://localhost:5000/product/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(product => product._id !== id);
                    setInventory(remaining);
                })
            }
        }

    return (
        <div>
         <Container>
                <Row>
                    {
                        inventory.map(product=><Col className='mt-3 py-5 px-3 '  md="4" sm="12">
                            <div className='cart-container text-center  Larger shadow rounded-3'>
                            <img className='w-50 Larger shadow rounded-3' src={product.image}/>
                                 <h5 className='text-center'>Product : {product.name}</h5>
                                 <p>Supplier : {product.supplier}</p>
                                 <p>quantity : {product.quantity}</p>
                                 <p>Sold : {product.sold}</p>
                                 <p>Description : {product?.description?.slice(0,100)}</p>
                                 <h2>Price : ${product.price}</h2>
                                 <Link className='p-2 m-1 text-light btn btn-danger' to='' onClick={() => handleDelete(product._id)}>Delete</Link>
                                 {/* <Button onClick={() => handleDelete(product._id)}>Delete</Button> */}
                                 <div className='text-center m-5 update-button'>
                                <Link to="/inventory" className=' p-2 bg-primary text-light rounded text-decoration-none'> Go to Inventory</Link>
                                
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