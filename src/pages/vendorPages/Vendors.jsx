import vendorServices from "../../services/vendorServices";
import { useLoaderData } from "react-router-dom";
import AddVendor from "./AddVendor";
import { useState } from "react";

export const loader = async () => {
  const vendors = await vendorServices.getVendors();
  return { vendors };
};
function Vendors() {
  const { vendors } = useLoaderData();
  const [vends, setVends] = useState(vendors.data.vendors);
  const [selectedVendor, setSelectedVendor] = useState(0);
  // console.log(cats[0][0].vendorName);
  const handleAddVendor = async (newVend) => {
    vendorServices
      .addVendor(newVend.name, newVend.contact, newVend.address)
      .then((response) => {
        setVends([...vends, response.data.vendor]);
        alert("Added vendor successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding vendor");
      });
  };
  const handleEditVendor = async (updatedVend) => {
    vendorServices
      .updateVendor(
        updatedVend.name,
        updatedVend.contact,
        updatedVend.address,
        selectedVendor._id
      )
      .then((response) => {
        const updatedVendors = vends.map((cat) =>
          cat._id === selectedVendor._id ? response.data.vendor : cat
        );
        setVends(updatedVendors);
        console.log(updatedVendors);
        alert("Edited vendor successful");
        setSelectedVendor(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing vendor");
      });
  };

  const handleDeleteVendor = async (vendorId) => {
    try {
      await vendorServices.deleteVendor(vendorId);
      alert("Deleted vendor successful");
      setVends(vends.filter((v) => v._id !== vendorId));
    } catch (error) {
      console.error("Error deleting vendor", error);
    }
  };

  return (
    <div>
      <div>
        {selectedVendor ? (
          <AddVendor onAddVendor={handleEditVendor} selected={selectedVendor} />
        ) : (
          <AddVendor onAddVendor={handleAddVendor} selected={selectedVendor} />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vendorname</th>
              <th scope="col">ContactNumber</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vends.length > 0 ? (
              vends.map((vendor, index) => (
                <tr key={vendor._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{vendor.vendorName}</td>
                  <td>{vendor.contact}</td>
                  <td>{vendor.address}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedVendor(vendor)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteVendor(vendor._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No vendors found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendors;
