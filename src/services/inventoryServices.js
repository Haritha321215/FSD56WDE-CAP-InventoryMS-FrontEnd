import { protectedInstance } from "./instance";

const inventoryServices = {
  getInventories: async () => {
    try {
      return protectedInstance.get("/inventories");
    } catch (error) {
      throw new Error("Error fetching inventories");
    }
  },
  addInventory: async (productName) => {
    try {
      return protectedInstance.post("/inventories/addInventory", {
        productName: productName,
      });
    } catch (error) {
      throw new Error("Error in adding inventories");
    }
    // make a POST request to the register endpoint
  },
  updateInventory: async (inventoryName, description,inventoryId) => {
    try {
      return protectedInstance.put(`/inventories/${inventoryId}`, {
        inventoryName: inventoryName,
      });
    } catch (error) {
      throw new Error("Error in adding inventories");
    }
  },
  deleteInventory: async (inventoryId) => {
    try {
      return protectedInstance.delete(`/inventories/${inventoryId}`);
    } catch (error) {
      throw new Error("Error in deleting inventory");
    }
  },
};

export default inventoryServices;
