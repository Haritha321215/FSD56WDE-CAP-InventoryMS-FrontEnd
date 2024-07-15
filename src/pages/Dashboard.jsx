import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // style={{ border: "1px solid black", paddingRight: "10px", backgroundColor:"skyblue" }}
  return (
    <div className="p-3 ">
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2">
          <div className="h5 d-flex g-2">
            <nav>
              <ul className="list-unstyled">
                <li className="p-2">
                  <Link
                    to="/dashboard/products"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Products
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Profile
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/categories"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Categories
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/vendors"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Vendors
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/stocks"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Stocks
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/inventories"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Inventoty
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/purchageorders"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    PurchageOrders
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/orders"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Orders
                  </Link>
                </li>
                <li className="p-2">
                  <Link
                    to="/dashboard/reports"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Reports
                  </Link>
                </li>
                
              </ul>
            </nav>
          </div>
          
        </div>
        
        <div className="col-sm-12 col-md-10 col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
