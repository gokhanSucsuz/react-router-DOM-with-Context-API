import { Outlet } from "react-router-dom"
import Categories from "./Categories"

export default function ProductLayout(){

    return (
        <>
            <div className="row my-5 shadow p-5 rounded-3">
                <div className="col-sm-10">
                    <Outlet />
                </div>
                <div className="col-sm-2">
                    <Categories />
                </div>
            </div>
        </>
    )
}