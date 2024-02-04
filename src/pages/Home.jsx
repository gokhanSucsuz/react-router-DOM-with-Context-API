/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Products } from "../products";
import { SiteContext } from "../context/SiteContext";


export default function Home(){
    const {user} = useContext(SiteContext)
    return (
        <>
        <div className="container my-5 shadow p-5 rounded-3">
            <h1>Home Page</h1>
            <Products  user={user}/>
        </div>
            
        </>
    )
}