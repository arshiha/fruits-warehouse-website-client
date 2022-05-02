import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row text-white">
        <div className="col-lg-6 text-center text-lg-left">
          <p className="small mb-0 mt-1">
            Copyright &copy;2022 <br></br>designed by Arshiha Bristy
          </p>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <a href="#">Home</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
