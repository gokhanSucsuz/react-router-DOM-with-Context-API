import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";

/* eslint-disable react/prop-types */
export default function Fav() {
  const [favs, setFavs] = useState([])

  useEffect(()=>{
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? [])
  },[])
  return (
    <>
      <h1>Favorites</h1>

      <div className="list-group shadow-lg">
        {
            favs.map(fav => 
            <Link key={fav.id} 
            to={`/products/product/${fav.id}`} 
            className="list-group-item list-group-item-action">
            {fav.title.toUpperCase()}
            </Link>)
        }
      </div>
    </>
  );
}
