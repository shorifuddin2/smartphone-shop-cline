import { useEffect, useState } from "react"

const UseInventory2 = ()=>{
    const[inventory,setInventory] = useState([]);
    useEffect(()=>{
        fetch('https://smartphone-shop-server.onrender.com/product2')
        .then(res=>res.json())
        .then(data=> setInventory(data));
    },[]);
    return [inventory,setInventory];
}
export default UseInventory2;