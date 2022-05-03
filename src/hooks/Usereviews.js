import { useEffect, useState } from "react"

const Usereviews = ()=>{
    const[reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=> setReviews(data));
    },[]);
    return [reviews,setReviews];
}
export default Usereviews;