import purchaseorderServices from "../../services/purchaseOrderServices";
import { useLoaderData } from "react-router-dom";
import AddPurchaseOrder from "./AddPurchaseOrder";
import { useState } from "react";

export const loader = async () => {
  const purchaseorders = await purchaseorderServices.getpurchaseorders();
  return { purchaseorders };
};
function PurchaseOrders() {
  const { purchaseorders } = useLoaderData();
  const [pOrds, setpOrds] = useState(purchaseorders.data.purchaseorders);
  const [selectedPurchaseOrder, setSelectedPurchaseOrder] = useState(0);
  console.log(pOrds);
  const handleAddPurchaseOrder = async (newPOrd) => {
    purchaseorderServices
      .addpurchaseorder(
        newPOrd.vendorName,
        newPOrd.productName,
        newPOrd.quantity,
        newPOrd.unitPrice
      )
      .then((response) => {
        setpOrds([...pOrds, response.data.purchaseorder]);
        alert("Added purchaseorder successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding purchaseorder");
      });
  };
  const handleEditPurchaseOrder = async (updatedPOrd) => {
    purchaseorderServices
      .updatePurchaseOrder(
        updatedPOrd.name,
        updatedPOrd.description,
        selectedPurchaseOrder._id
      )
      .then((response) => {
        const updatedPurchaseOrders = pOrds.map((cat) =>
          cat._id === selectedPurchaseOrder._id
            ? response.data.purchaseorder
            : cat
        );
        setpOrds(updatedPurchaseOrders);
        console.log(updatedPurchaseOrders);
        alert("Edited purchaseorder successful");
        setSelectedPurchaseOrder(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing purchaseorder");
      });
  };

  const handleDeletePurchaseOrder = async (purchaseorderId) => {
    try {
      await purchaseorderServices.deletePurchaseOrder(purchaseorderId);
      alert("Deleted purchaseorder successful");
      setpOrds(pOrds.filter((c) => c._id !== purchaseorderId));
    } catch (error) {
      console.error("Error deleting purchaseorder", error);
    }
  };

  return (
    <div>
      <div>
        {selectedPurchaseOrder ? (
          <AddPurchaseOrder
            onAddPurchaseorder={handleEditPurchaseOrder}
            selected={selectedPurchaseOrder}
          />
        ) : (
          <AddPurchaseOrder
            onAddPurchaseorder={handleAddPurchaseOrder}
            selected={selectedPurchaseOrder}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Vendor Name</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order Date</th>
              <th scope="col">Order Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pOrds.length > 0 ? (
              pOrds.map((purchaseorder, index) => (
                <tr key={purchaseorder._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{purchaseorder.vendorName}</td>
                  <td>{purchaseorder.productName}</td>
                  <td>{purchaseorder.quantity}</td>
                  <td>{purchaseorder.unitPrice}</td>
                  <td>{purchaseorder.totalPrice}</td>
                  <td>{purchaseorder.orderDate}</td>
                  <td>{purchaseorder.orderStatus}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedPurchaseOrder(purchaseorder)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() =>
                          handleDeletePurchaseOrder(purchaseorder._id)
                        }
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No purchaseorders found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseOrders;
