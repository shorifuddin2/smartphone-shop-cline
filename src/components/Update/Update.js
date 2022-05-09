
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

// inventory
const Update = () => {
    const{id} = useParams();
    const[restock,setReStock] = useState(1);
    const[service,setService] = useState({});

    const stockInput = (event)=>{
      setReStock(event.target.value)
    }
    const navigate = useNavigate();

    const stockButton = ()=>{
          
   
        const url =`http://localhost:5000/product/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({restock})
        })
        .then(res => res.json())
        .then(data => {
          if(data.matchedCount > 0){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
            
          }
        })
    }
    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
        
    },[id]);
  const update = ()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
              
        
          })
        .then(res => res.json())
        .then(data => console.log(data))
   
  }
    return (
        <div>
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                    <Card className='m-5 bg-info'>
                  <Card.Img variant="top w-50 mx-auto " src={service.image} />
                  <Card.Body>
                    <Card.Title> Name : {service.name}</Card.Title>
                    <Card.Title style={{fontSize : '15px'}}> SupplierName : {service.supplier}</Card.Title>
                    <Card.Text> Description: {service.description}</Card.Text>
                    <Card.Text>Price is : {service.price}</Card.Text>
                    <h5 className='pb-2'>Quantity : {service.quantity}</h5>
                    <h5 className='pb-2'>Sold : {service.sold}</h5>
                    <Button variant="primary" onClick={update}>delivered</Button>
                  </Card.Body>
                  <input className='w-25 mx-3' onBlur={stockInput} type="number" name="" required id="" />
                  <button className='w-25 mx-3 btn btn-primary my-1' onClick={stockButton} >Restock</button>
            
              </Card>
    </Col>
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Update;

