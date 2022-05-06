import React from 'react';
import useProduct from '../../../hooks/UseProductUpdeate';


const ManageItems = () => {
    const [inventory, setInventory] = useProduct();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product2/${id}`;
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
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                inventory.map(product => <div key={product._id}>
                    <h5>{product.name} <button onClick={() => handleDelete(product._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};
export default ManageItems;