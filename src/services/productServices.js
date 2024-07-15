import { protectedInstance } from "./instance";

const productServices = {
  getProducts: async () => {
    try {
      return protectedInstance.get("/products");
    } catch (error) {
      throw new Error("Error fetching products");
    }
  },
  addProduct: async (
    productName,
    description,
    category,
    buying_price,
    selling_price,
    unit,
    vendor,
    drawer_number,
    reorder_level
  ) => {
    try {
      return protectedInstance
        .post("/products/addProduct", {
          productName: productName,
          description: description,
          category: category,
          buying_price: buying_price,
          selling_price: selling_price,
          unit: unit,
          vendor: vendor,
          drawer_number: drawer_number,
          reorder_level: reorder_level,
        })
    } catch (error) {
      throw new Error("Error in adding products");
    }
  },
  updateProduct: async (
    productName,
    description,
    category,
    buying_price,
    selling_price,
    unit,
    vendor,
    drawer_number,
    reorder_level,
    productId
  ) => {
    try {
      return protectedInstance.put(`/products/${productId}`, {
        productName: productName,
        description: description,
        category: category,
        buying_price: buying_price,
        selling_price: selling_price,
        unit: unit,
        vendor: vendor,
        drawer_number: drawer_number,
        reorder_level: reorder_level,
      });
    } catch (error) {
      throw new Error("Error in updating products");
    }
  },
  deleteProduct: async (productId) => {
    try {
      return protectedInstance.delete(`/products/${productId}`);
    } catch (error) {
      throw new Error("Error in deleting product");
    }
  },
};

export default productServices;
