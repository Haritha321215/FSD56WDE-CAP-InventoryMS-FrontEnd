import { protectedInstance } from "./instance";

const orderServices = {
  getOrders: async () => {
    try {
      return protectedInstance.get("/orders");
    } catch (error) {
      throw new Error("Error fetching orders");
    }
  },
  addOrder: async (customerName, productName, quantity) => {
    try {
      console.log(customerName, productName, quantity);
      return protectedInstance.post("/orders/addOrder", {
        customerName: customerName,
        productName: productName,
        quantity: quantity,
      });
    } catch (error) {
      throw new Error("Error in adding orders");
    }
    // make a POST request to the register endpoint
  },
  updateOrder: async (quantity, orderId) => {
    try {
      return protectedInstance.put(`/orders/${orderId}`, {
        quantity: quantity,
      });
    } catch (error) {
      throw new Error("Error in adding orders");
    }
  },
  deleteOrder: async (orderId) => {
    try {
      return protectedInstance.delete(`/orders/${orderId}`);
    } catch (error) {
      throw new Error("Error in deleting order");
    }
  },
};

export default orderServices;
