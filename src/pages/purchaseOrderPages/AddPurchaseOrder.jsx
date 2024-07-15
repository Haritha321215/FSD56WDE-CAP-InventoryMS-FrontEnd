// import React from "react";
import { useState } from "react";
function AddPurchaseorder({ onAddPurchaseorder, selected }) {
  const [newPOrd, setNewPOrd] = useState({ selected });
  console.log(selected);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPOrd({ ...newPOrd, [name]: value });
  };

  const handleSubmit = (e) => {
    // prevent the default form submission
    e.preventDefault();

    console.log(newPOrd);
    onAddPurchaseorder(newPOrd);
    setNewPOrd({ vendorName: "", productName: "", quantity:"", unitPrice:"" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 col-md-12 col-lg-md d-flex flex-row align-items-center justify-content-between m-1">
          <div className="mr-1">
            <input
              type="text"
              name="vendorName"
              placeholder="Vendor Name"
              value={newPOrd.vendorName}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={newPOrd.productName}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={newPOrd.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mr-1">
            <input
              type="text"
              name="unitPrice"
              placeholder="Unit price"
              value={newPOrd.unitPrice}
              onChange={handleChange}
            />
          </div>
          {selected ? (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              update Purchaseorder
            </button>
          ) : (
            <button
              className="mr-1 btn btn-outline-primary btn-sm"
              type="submit"
            >
              Add Purchaseorder
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddPurchaseorder;
