import React from "react";
import notfound from "../../../images/notfound/404.jpg";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-danger text-center">
        Page Not Found...Please Try Again
      </h1>

      <img className="w-100" src={notfound} alt="" />
    </div>
  );
};

export default NotFoundPage;
