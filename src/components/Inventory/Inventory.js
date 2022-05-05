import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseInventory from '../../hooks/UseInventory';
import AllInventory from '../AllInventory/AllInventory';


const Inventory = () => {
    const[Inventory,setInventory] = UseInventory();
    return (
        <div>
            <Container>
                <Row>
                    <AllInventory></AllInventory>
                </Row>
            </Container>
        </div>
    );
};

export default Inventory;