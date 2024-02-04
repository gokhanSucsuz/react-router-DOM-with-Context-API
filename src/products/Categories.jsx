import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    },[])

  return (
    <>
      <h1>Categories</h1>
      <div className="list-group shadow-lg">
        {
            categories.map((category,index) => 
            <Link key={index} 
            to={`/products/category/${category}`} 
            className="list-group-item list-group-item-action">
            {category.toUpperCase()}
            </Link>)
        }
      </div>
    </>
  );
}
