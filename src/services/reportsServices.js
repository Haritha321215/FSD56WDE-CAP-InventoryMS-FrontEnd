import { protectedInstance } from "./instance";

const reportsServices = {
  generateInventoryReport: async () => {
    try {
      return protectedInstance.get("/reports/generateInventoryReport");
    } catch (error) {
      throw new Error("Error fetching reports");
    }
  },
 
};

export default reportsServices;
