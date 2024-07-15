// import React from "react";
import { useState } from "react";
function AddOrder({ onAddOrder, selected }) {
  const [newOrd, setNewOrd] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrd({ ...newOrd, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newOrd);
    onAddOrder(newOrd);
    setNewOrd({ name: "", productName: "", quantity: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              value={newOrd.name}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={newOrd.productName}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              value={newOrd.quantity}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Order
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Order
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddOrder;
