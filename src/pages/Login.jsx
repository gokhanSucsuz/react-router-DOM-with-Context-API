import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"

/* eslint-disable react/prop-types */
export default function Login(){
    const {handleLogin} = useContext(SiteContext)
    return (
        <>
            <h1>Login</h1>
            <button 
            className="btn btn-outline-warning" 
            onClick={handleLogin}
            >Login
            </button>
        </>
    )
}