import { useEffect, useState } from "react"

const UseInventory = ()=>{
    const[inventory,setInventory] = useState([]);
    useEffect(()=>{
        fetch('https://mysterious-ridge-40298.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=> setInventory(data));
    },[]);
    return [inventory,setInventory];
}
export default UseInventory;