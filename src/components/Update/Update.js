
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

// inventory
const Update = () => {
    const{id} = useParams();
    const[resstock,setResstock] = useState(1);
    const[service,setService] = useState({});
    const stockinput = (event)=>{
      setResstock(event.target.value)
    }
    const navigate = useNavigate();

    const stockbutton = ()=>{
            console.log(resstock)
          const quantity = resstock;
      const product = {SupplierName : service.SupplierName,description:service.description,quantity : quantity,price : service.price,picture : service.picture,Brand : service.Brand};
    
   
        const url =`http://localhost:5000/product/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
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
      let quantity;
      if(service.quantity > 0){
        quantity = service.quantity -1
      }
      const product = {supplier : service.supplier,description:service.description,stock:service.stock,sold:service.sold,quantity : quantity,price : service.price,img : service.img,Brand : service.Brand};
    
   
        const url = `http://localhost:5000/product/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)   
        
          })
        .then(res => res.json())
.then(data => {
    if(data.matchedCount > 0){
       
             setService(data)
        
    }
})


   
  }
    return (
        <div>
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                    <Card className='mb-4'>
                      <p>product id : {id}</p>
  <Card.Img variant="top" src={service.picture} />
  <Card.Body>
    <Card.Title> brand : {service.Brand}</Card.Title>
    <Card.Title style={{fontSize : '15px'}}> SupplierName : {service.SupplierName}</Card.Title>
    <Card.Text>{service.description}</Card.Text>
    <Card.Text>price is : {service.price}</Card.Text>
    <h5 className='pb-2'>quantity : {service.quantity}</h5>
    <Button variant="primary">delivered</Button>
  </Card.Body>
</Card>
    </Col>
                    
                </Row>
            </Container>
            <input onBlur={stockinput} type="number" name="" required id="" />
            <button onClick={stockbutton} >Restock</button>
            <Row>
    <Col md="4"></Col>
    <Col md="4" className='mx-auto'>
    
    </Col>
  </Row>
        </div>
    );
};

export default Update;

