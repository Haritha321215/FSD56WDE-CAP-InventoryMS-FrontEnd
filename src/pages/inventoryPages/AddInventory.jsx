// import React from "react";
import { useState } from "react";
function AddInventory({ onAddInventory, selected }) {
  const [newInv, setNewInv] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInv({ ...newInv, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newInv);
    onAddInventory(newInv);
    setNewInv({
      name: "",
    });
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
              value={newInv.name}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Inventory
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Inventory
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddInventory;
