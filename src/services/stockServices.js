import { protectedInstance } from "./instance";

const stockServices = {
  getStocks: async () => {
    try {
      return protectedInstance.get("/stocks");
    } catch (error) {
      throw new Error("Error fetching stocks");
    }
  },
  addStock: async (productName, stockQuantity, max_quantity) => {
    try {
      return protectedInstance.post("/stocks/addStock", {
        productName: productName,
        stockQuantity: stockQuantity,
        max_quantity: max_quantity,
      });
    } catch (error) {
      throw new Error("Error in adding stocks");
    }
    // make a POST request to the register endpoint
  },
  updateStock: async (stockName, description, stockId) => {
    try {
      return protectedInstance.put(`/stocks/${stockId}`, {
        stockName: stockName,
        description: description,
      });
    } catch (error) {
      throw new Error("Error in adding stocks");
    }
  },
  deleteStock: async (stockId) => {
    try {
      return protectedInstance.delete(`/stocks/${stockId}`);
    } catch (error) {
      throw new Error("Error in deleting stock");
    }
  },
};

export default stockServices;
