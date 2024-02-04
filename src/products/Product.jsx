/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error(err));
  }, [productId]);
  if (!product) return <></>;
  return (
    <>
      <div className="row row-cols-2">
        <div className="col shadow rounded-3 p-2">
          <div className="card h-100">
            <img
              src={product.image}
              className="w-100 img-thumbnail"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <h6>${product.price}</h6>
              <a
                href="#"
                className="btn btn-warning"
                onClick={() => handleClick(product)}
              >
                Fav
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
