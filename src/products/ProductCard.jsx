/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

/* eslint-disable react/prop-types */
export default function ProductCard({ item }) {
  
const {user} = useContext(SiteContext)
function handleClick(product) {
  
    let localFavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    const itemIndex = localFavs.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localFavs = localFavs.filter((item) => item.id !== product.id);
    } else {
      localFavs.push({ id: product.id, title: product.title });
    }
    localStorage.setItem("favs", JSON.stringify(localFavs));
  }
  return (
    <>
      <div className="col shadow rounded-3 p-2">
        <div className="card h-100">
          <Link to={`/products/product/${item.id}`}>
            <img
              src={item.image}
              className="card-img-top"
              style={{ height: "250px", width: "100%", padding: "10px" }}
              alt="..."
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{item.title.substring(0, 20)}</h5>
            <p className="card-text">{item.description.substring(0, 20)}</p>
            <h6>${item.price.toFixed(2)}</h6>
            {user && (
              <a
                href="#"
                className="btn btn-warning"
                onClick={() => handleClick(item)}
              >Fav
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
