import React from "react";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="page-error mt-2">
      <h3 className="text-center text">
        Oops! Something went wrong.Please try again...
      </h3>
      <PageNotFound></PageNotFound>
    </div>
  );
};

export default NotFound;
