import { useNavigate } from "react-router-dom";

function LoginWrapper() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <button
        className="btn btn-outline-primary btn-sm m-1 w-100"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      <button
        className="btn btn-outline-primary btn-sm m-1 w-100"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
export default LoginWrapper;
