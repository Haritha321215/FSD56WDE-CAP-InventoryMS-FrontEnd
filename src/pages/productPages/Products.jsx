import productServices from "../../services/productServices";
import { useLoaderData } from "react-router-dom";
import AddProduct from "./AddProduct";
import { useState } from "react";

export const loader = async () => {
  const products = await productServices.getProducts();
  console.log("inprods"+products);
  return { products };
};
function Products() {
  const { products } = useLoaderData();
  const [prods, setProds] = useState(products.data.products);
  const [selectedProduct, setSelectedProduct] = useState(0);
  // console.log(selectedProduct);
  const handleAddProduct = async (newProd) => {
    productServices
      .addProduct(
        newProd.name,
        newProd.description,
        newProd.category,
        newProd.buying_price,
        newProd.selling_price,
        newProd.unit,
        newProd.vendor,
        newProd.drawer_number,
        newProd.reorder_level
        
      )
      .then((response) => {
        setProds([...prods, response.data.product]);
        alert("Added product successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding product");
      });
  };
  const handleEditProduct = async (updatedProd) => {
    productServices
      .updateProduct(
        updatedProd.name,
        updatedProd.description,
        updatedProd.category,
        updatedProd.buying_price,
        updatedProd.selling_price,
        updatedProd.unit,
        updatedProd.vendor,
        updatedProd.drawer_number,
        updatedProd.reorder_level,
        selectedProduct._id
      )
      .then((response) => {
        const updatedProducts = prods.map((prod) =>
          prod._id === selectedProduct._id ? response.data.product : prod
        );
        setProds(updatedProducts);
        console.log(updatedProducts);
        alert("Edited product successful");
        setSelectedProduct(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing product");
      });
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await productServices.deleteProduct(productId);
      alert("Deleted product successful");
      setProds(prods.filter((p) => p._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <div>
        {/* {console.log(selectedProduct)} */}
        {selectedProduct ? (
          <AddProduct
            onAddProduct={handleEditProduct}
            selected={selectedProduct}
          />
        ) : (
          <AddProduct
            onAddProduct={handleAddProduct}
            selected={selectedProduct}
          />
        )}
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Productname</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Buying Price</th>
              <th scope="col">Selling price</th>
              <th scope="col">Unit</th>
              <th scope="col">Vendor</th>
              <th scope="col">Drawer No</th>
              <th scope="col">Reorder level</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {prods.length > 0 ? (
              prods.map((product, index) => (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.buying_price}</td>
                  <td>{product.selling_price}</td>
                  <td>{product.unit}</td>
                  <td>{product.vendor}</td>
                  <td>{product.drawer_number}</td>
                  <td>{product.reorder_level}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No products found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
