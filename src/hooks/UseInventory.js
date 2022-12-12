import { useEffect, useState } from "react"

const UseInventory = ()=>{
    const[inventory,setInventory] = useState([]);
    useEffect(()=>{
        fetch('https://smartphone-shop-server.onrender.com/product')
        .then(res=>res.json())
        .then(data=> setInventory(data));
    },[]);
    return [inventory,setInventory];
}
export default UseInventory;