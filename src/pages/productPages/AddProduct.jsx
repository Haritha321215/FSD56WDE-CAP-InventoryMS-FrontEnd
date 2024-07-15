// import React from "react";
import { useState } from "react";
function AddProduct({ onAddProduct, selected }) {
  const [newProd, setNewProd] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProd({ ...newProd, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    // console.log(newProd);
    onAddProduct(newProd);
    setNewProd({
      name: "",
      description: "",
      category: "",
      buying_price: "",
      selling_price: "",
      unit: "",
      vendor: "",
      drawer_number: "",
      reorder_level: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={newProd.name}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={newProd.description}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              placeholder="Category Name"
              name="category"
              value={newProd.category}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="number"
              placeholder="Buying Price"
              name="buying_price"
              value={newProd.buying_price}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="number"
              placeholder="Selling Price"
              name="selling_price"
              value={newProd.selling_price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              placeholder="Unit"
              name="unit"
              value={newProd.unit}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              placeholder="Vendor name"
              name="vendor"
              value={newProd.vendor}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              placeholder="Drawer No"
              name="drawer_number"
              value={newProd.drawer_number}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="number"
              placeholder="Reorder level"
              name="reorder_level"
              value={newProd.reorder_level}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Update Product
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
