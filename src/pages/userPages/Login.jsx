import { Link, useNavigate } from "react-router-dom";
import userServices from "../../services/userServices";

const Login = () => {
  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // send the details to the API
    userServices
      .login(email, password)
      .then((response) => {
        // clear the form
        e.target.reset();
        alert("Login successful");

        // if the login is successful, redirect to the dashboard page
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((error) => {
        // if there is an error, log the error to the console
        console.log(error);
        alert("Login failed");
      });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-between m-5">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input type="email" placeholder="Email..." />
        </div>
        <div className="mb-3">
          <input type="password" placeholder="Password..." />
        </div>
        <button className="mb-3 btn btn-outline-primary btn-sm" type="submit">Login</button>
        <p className="text-dark">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
