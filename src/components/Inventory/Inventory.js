import React from 'react';
import { Button } from 'react-bootstrap';
import Product from '../Product/Product';
import Produc2 from '../Product/Product2';



const Inventory = () => {
    
    return (
        <div>
            <Button>New Add Product</Button>
            <Product></Product>
            <Produc2></Produc2>
        </div>
    );
};    
export default Inventory;