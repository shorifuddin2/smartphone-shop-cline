import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { set } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';
import UseProductUpdeate from '../../hooks/UseUpdate';



const Product = () => {
    const[inventory,setInventory] = UseInventory();

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

    const handleUpdate=(id)=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = inventory.map(product => product._id !== id);
            setInventory(remaining);
        })
    }


    return (
        <div>
            <Container>
                <Row>
                    {
                        inventory.slice(0,6).map(product=><Col md="4" sm="12">
                            <div className='cart-container text-center border border-primary my-5 Larger shadow rounded-3'>
                            <img className='w-50 rounded mx-auto d-block' src={product.img}/>
                                 <h5 className='text-center'>Product : {product.name}</h5>
                                 <p>Supplier : {product.supplier}</p>
                                 <p>quantity : {product.quantity}</p>
                                 <p>Sold : {product.sold}</p>
                                 <p>Description : {product.description.slice(0,100)}</p>
                                 <h2>Price : ${product.price}</h2>
                                 <div className='text-center my-2 update-button'>
                                {/* <Link className='p-2 m-1 text-light btn btn-danger' to=''onClick={() => handleDelete(product._id)}>Delete</Link> */}
                                <Button onClick={() => handleDelete(product._id)}>Delete</Button>
                                <Link to="/update">
                                    <button className='btn btn-primary' onClick={()=>handleUpdate(product._id)}>Update</button>
                                </Link>
                                </div>
                                <Link to="/addItems"><Button>ManageItem</Button></Link>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default Product;