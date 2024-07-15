// import React from "react";
import { useState } from "react";
function AddVendor({ onAddVendor, selected }) {
  const [newVend, setNewVend] = useState({ selected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVend({ ...newVend, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newVend);
    onAddVendor(newVend);
    setNewVend({ name: "", contact: "" , address:""});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="name"
              placeholder="Vendor Name"
              value={newVend.name}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={newVend.contact}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={newVend.address}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Vendor
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Vendor
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddVendor;
