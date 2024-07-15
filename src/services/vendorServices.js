import { instance, protectedInstance } from "./instance";

const vendorServices = {
  getVendors: async () => {
    try {
      return protectedInstance.get("/vendors");
    } catch (error) {
      throw new Error("Error fetching vendors");
    }
  },
  addVendor: async (vendorName, contact, address) => {
    try {
      return protectedInstance.post("/vendors/addVendor", {
        vendorName: vendorName,
        contact: contact,
        address: address,
      });
    } catch (error) {
      throw new Error("Error in adding vendors");
    }
    // make a POST request to the register endpoint
  },
  updateVendor: async (vendorName, contact, address, vendorId) => {
    try {
      return protectedInstance.put(`/vendors/${vendorId}`, {
        vendorName: vendorName,
        contact: contact,
        address: address,
      });
    } catch (error) {
      throw new Error("Error in adding vendors");
    }
  },
  deleteVendor: async (vendorId) => {
    try {
      return protectedInstance.delete(`/vendors/${vendorId}`);
    } catch (error) {
      throw new Error("Error in deleting vendor");
    }
  },
};

export default vendorServices;