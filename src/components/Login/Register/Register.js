import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register">
      <h1 className="text-center text-success mt-3">Please Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Email" required />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input className="btn btn-success" type="submit" value="Register" />

        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger text-decoration-none pe-auto"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
