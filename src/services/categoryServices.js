import { protectedInstance } from "./instance";

const categoryServices = {
  getCategories: async () => {
    try {
      return protectedInstance.get("/categories");
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  },
  addCategory: async (categoryName, description) => {
    try {
      return protectedInstance.post("/categories/addCategory", {
        categoryName: categoryName,
        description: description,
      });
    } catch (error) {
      throw new Error("Error in adding categories");
    }
    // make a POST request to the register endpoint
  },
  updateCategory: async (categoryName, description,categoryId) => {
    try {
      return protectedInstance.put(`/categories/${categoryId}`, {
        categoryName: categoryName,
        description: description,
      });
    } catch (error) {
      throw new Error("Error in adding categories");
    }
  },
  deleteCategory: async (categoryId) => {
    try {
      return protectedInstance.delete(`/categories/${categoryId}`);
    } catch (error) {
      throw new Error("Error in deleting category");
    }
  },
};

export default categoryServices;
