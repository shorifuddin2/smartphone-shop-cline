import { useEffect, useState } from "react";

const UseUpdate = productId =>{
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://mysterious-ridge-40298.herokuapp.com/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId]);
    return [product]
}

export default UseUpdate;