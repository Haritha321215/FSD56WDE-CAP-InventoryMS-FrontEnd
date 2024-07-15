import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import LoginWrapper from "./LoginWrapper";
import Register from "../pages/userPages/Register";
import Login from "../pages/userPages/Login";
import DashboardWrapper from "./DashboardWrapper";
import Dashboard from "../pages/Dashboard";
import { loader as userLoader } from "./DashboardWrapper";

import Products from "../pages/productPages/Products";
import { loader as productLoader } from "../pages/productPages/Products";
import Profile from "../pages/userPages/Profile";

import Categories from "../pages/categoryPages/Categories";
import { loader as categoryLoader } from "../pages/categoryPages/Categories";

import Vendors from "../pages/vendorPages/Vendors";
import { loader as vendorLoader } from "../pages/vendorPages/Vendors";

import Stocks from "../pages/stockPages/Stocks";
import { loader as stockLoader } from "../pages/stockPages/Stocks";

import Inventories from "../pages/inventoryPages/Inventories";
import { loader as inventoryLoader } from "../pages/inventoryPages/Inventories";

import PurchaseOrders from "../pages/purchaseOrderPages/PurchaseOrders";
import { loader as purchaserOrderLoader } from "../pages/purchaseOrderPages/PurchaseOrders";



import Reports from "../pages/reportsPages/Reports";
import { loader as reportsLoader } from "../pages/reportsPages/Reports";

import Customers from "../pages/Customers";

import Orders from "../pages/orderPages/Orders";
import { loader as orderLoader } from "../pages/orderPages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <LoginWrapper />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />,
    loader: userLoader,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "products",
            element: <Products />,
            loader: productLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            loader: userLoader,
          },
          {
            path: "categories",
            element: <Categories />,
            loader: categoryLoader,
          },
          {
            path: "vendors",
            element: <Vendors />,
            loader: vendorLoader,
          },
          {
            path: "stocks",
            element: <Stocks />,
            loader: stockLoader,
          },
          {
            path: "inventories",
            element: <Inventories />,
            loader: inventoryLoader,
          },
          {
            path: "purchageorders",
            element: <PurchaseOrders />,
            loader: purchaserOrderLoader,
          },
          {
            path: "orders",
            element: <Orders />,
            loader: orderLoader,
          },
          {
            path: "reports",
            element: <Reports />,
            loader: reportsLoader,
          },
        ],
      },
    ],
  },
]);
function Body() {
  return (
    <div>
      <div>
        <center>
          <RouterProvider router={router} />
        </center>
      </div>
    </div>
  );
}

export default Body;
