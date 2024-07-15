// import React from "react";
import { useState } from "react";
function AddStock({ onAddStock, selected }) {
  const [newStok, setNewStok] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStok({ ...newStok, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newStok);
    onAddStock(newStok);
    setNewStok({ name: "", stockQuantity: "", maxQuantity:"" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newStok.name}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="stockQuantity"
              placeholder="Stock quantity"
              value={newStok.stockQuantity}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="maxQuantity"
              placeholder="Max quantity"
              value={newStok.maxQuantity}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Stock
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Stock
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddStock;
