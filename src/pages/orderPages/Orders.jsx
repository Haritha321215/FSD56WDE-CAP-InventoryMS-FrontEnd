import orderServices from "../../services/orderServices";
import { useLoaderData } from "react-router-dom";
import AddOrder from "./AddOrder";
import { useState } from "react";

export const loader = async () => {
  const orders = await orderServices.getOrders();
  return { orders };
};
function Orders() {
  const { orders } = useLoaderData();
  const [ords, setOrds] = useState(orders.data.orders);
  const [selectedOrder, setSelectedOrder] = useState(0);
  // console.log(cats[0][0].orderName);
  const handleAddOrder = async (newOrd) => {
    orderServices
      .addOrder(newOrd.name, newOrd.productName, newOrd.quantity)
      .then((response) => {
        setOrds([...ords, response.data.order]);
        alert("Added order successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding order");
      });
  };
  const handleEditOrder = async (updatedOrd) => {
    orderServices
      .updateOrder(
        updatedOrd.quantity,
        selectedOrder._id
      )
      .then((response) => {
        const updatedOrders = ords.map((cat) =>
          cat._id === selectedOrder._id ? response.data.order : cat
        );
        setOrds(updatedOrders);
        console.log(updatedOrders);
        alert("Edited order successful");
        setSelectedOrder(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing order");
      });
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await orderServices.deleteOrder(orderId);
      alert("Deleted order successful");
      setOrds(ords.filter((c) => c._id !== orderId));
    } catch (error) {
      console.error("Error deleting order", error);
    }
  };

  return (
    <div>
      <div>
        {selectedOrder ? (
          <AddOrder
            onAddOrder={handleEditOrder}
            selected={selectedOrder}
          />
        ) : (
          <AddOrder
            onAddOrder={handleAddOrder}
            selected={selectedOrder}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ords.length > 0 ? (
              ords.map((order, index) => (
                <tr key={order._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{order.customerName}</td> 
                  <td>{order.productName}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total_amount}</td>
                  <td>{order.status}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No orders found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
