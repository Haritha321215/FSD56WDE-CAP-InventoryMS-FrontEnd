import { protectedInstance } from "./instance";

const purchaseorderServices = {
  getpurchaseorders: async () => {
    try {
      return protectedInstance.get("/purchaseorders");
    } catch (error) {
      throw new Error("Error fetching purchaseorders");
    }
  },
  addpurchaseorder: async (vendorName, productName, quantity, unitPrice) => {
    try {
      console.log(vendorName, productName, quantity, unitPrice);
      return protectedInstance.post("/purchaseorders/addpurchaseorder", {
        vendorName: vendorName,
        productName: productName,
        quantity: quantity,
        unitPrice: unitPrice,
      });
    } catch (error) {
      throw new Error("Error in adding purchaseorders");
    }
    // make a POST request to the register endpoint
  },
  updatePurchaseOrder: async (
    purchaseorderName,
    description,
    purchaseorderId
  ) => {
    try {
      return protectedInstance.put(`/purchaseorders/${purchaseorderId}`, {
        purchaseorderName: purchaseorderName,
        description: description,
      });
    } catch (error) {
      throw new Error("Error in adding purchaseorders");
    }
  },
  deletePurchaseOrder: async (purchaseorderId) => {
    try {
      return protectedInstance.delete(`/purchaseorders/${purchaseorderId}`);
    } catch (error) {
      throw new Error("Error in deleting purchaseorder");
    }
  },
};

export default purchaseorderServices;
