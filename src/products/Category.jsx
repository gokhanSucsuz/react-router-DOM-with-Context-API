/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductCard } from "../products";

export default function Category(){
    const {categoryName} = useParams()
    const [categoryProducts, setCategoryProducts] = useState([])
    
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(json=>setCategoryProducts(json))
            .catch(err => console.log(err))
    }, [categoryName])
    return (
        <>
            <h1>Category: {categoryName.toUpperCase()} </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {categoryProducts.map(item=>
                    <ProductCard key={item.id} item={item} />
                )
                }
            </div>
        </>
    )
}