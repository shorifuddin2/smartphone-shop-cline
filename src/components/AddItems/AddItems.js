import { async } from '@firebase/util';
import axios from 'axios';
import { Toast } from 'bootstrap';

import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItems = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
          name: e.target.name.value,
          price: e.target.price.value,
          image: e.target.image.value,
        };
    
      const {data}= await axios.post('http://localhost:5000/addItems',product)
      
      if(!data.success){
          return Toast.error(data.error)
      }
      Toast.success(data.massage)
    }    


    return (
        
          <div className="w-50  md:w-3/4 lg:w-1/2 mx-auto Larger shadow rounded-3 m-5 p-5">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-3">
                <label className="">
                  Name
                </label>
                <br/>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-100"
                />
              </div>
    
              <div className="flex items-center mb-3">
                <label className="">
                  Price
                </label>
                <br/>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="w-100"
                />
              </div>
              <div className="flex items-center mb-3">
                <label className="">
                  Sold
                </label>
                <br/>
                <input
                  type="number"
                  name="price"
                  placeholder="Sold"
                  className="w-100"
                />
              </div>
              <div className="flex items-center mb-3">
                <label className="">
                  Quantity
                </label>
                <br/>
                <input
                  type="number"
                  name="price"
                  placeholder="Quantity"
                  className="w-100"
                />
              </div>
              <div className="flex items-center mb-3">
                <label className="w-100">
                  Supplier
                </label>
                <br/>
                <input
                  type="text"
                  name="price"
                  placeholder="Supplier"
                  className="w-100"
                />
              </div>
              
              <div className="flex items-center mb-3">
                <label className="w-100">
                  Description
                </label>
                <br/>
                <input
                  type="text"
                  name="price"
                  placeholder="Description"
                  className="w-100"
                />
              </div>
    
              <div className="flex items-center mb-10">
                <label
                  className="w-100"
                >
                  Image
                </label>
                <br/>
                <input
                  type="text"
                  name="image"
                  placeholder="url"
                  className="w-100"
                />
              </div>
    
              <div className="text-right">
                <button className="bg-primary px-5 py-2 my-2 rounded-3">Add</button>
              </div>
            </form>
          </div>
        
      );
    };

export default AddItems;