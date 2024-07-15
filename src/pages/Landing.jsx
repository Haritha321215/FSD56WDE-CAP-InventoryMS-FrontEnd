import { Outlet } from "react-router-dom";
function Landing() {
  
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4 text-primary">
      <h5> The Right Products in The Right Place at The Right Time</h5>
      <Outlet />
    </div>
  )
}
export default Landing;