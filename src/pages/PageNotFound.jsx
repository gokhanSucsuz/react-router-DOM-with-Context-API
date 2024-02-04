import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
    <div
      className="container d-flex flex-column justify-content-center align-items-center my-5 shadow py-5 rounded-3"
      style={{height:"800px"}}
    >
      <h1>404 - Page not Found!</h1>
      <Link to="/" className="btn btn-warning text-white fs-5">
        Please click to go to Home Page
      </Link>
    </div>
    </>
    
  );
}
