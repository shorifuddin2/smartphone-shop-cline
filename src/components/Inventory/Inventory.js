import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Product2 from '../Product/Product2';




const Inventory = () => {
    
    return (
        <div>
            <Link to="/addItems"><Button>Add New Items</Button></Link>
            <Product></Product>
            <Product></Product>
            
        </div>
    );
};    
export default Inventory;