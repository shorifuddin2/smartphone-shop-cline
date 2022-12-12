import React, { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
    const[service,setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
        
    },[service]);
    return[service,setService];
}

export default useSingleProduct;