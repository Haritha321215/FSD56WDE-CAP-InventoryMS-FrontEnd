import { Link, useNavigate } from "react-router-dom";
import userServices from "../../services/userServices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

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
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <Form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className="form-control"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              className="form-control"
              id="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <button className="mb-3 btn btn-outline-primary btn-sm" type="submit">
            Login
          </button>
          <p className="text-dark">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
