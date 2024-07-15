import inventoryServices from "../../services/inventoryServices";
import { useLoaderData } from "react-router-dom";
import AddInventory from "./AddInventory";
import { useState } from "react";

export const loader = async () => {
  const inventories = await inventoryServices.getInventories();
  return { inventories };
};
function Inventories() {
  const { inventories } = useLoaderData();
  const [invs, setInvs] = useState(inventories.data.inventories);
  const [selectedInventory, setSelectedInventory] = useState(0);
  // console.log(cats[0][0].inventoryName);
  const handleAddInventory = async (newInv) => {
    inventoryServices
      .addInventory(newInv.name)
      .then((response) => {
        setInvs([...invs, response.data.inventory]);
        alert("Added inventory successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding inventory");
      });
  };
  const handleEditInventory = async (updatedInv) => {
    inventoryServices
      .updateInventory(
        updatedInv.productName,
        updatedInv.drawer_number,
        updatedInv.openingStock,
        updatedInv.inStock,
        updatedInv.outstock,
        updatedInv.closingStock,
        updatedInv.totalStockBuyingPrice,
        updatedInv.totalStockSellingPrice,
        updatedInv.min_quantity,
        updatedInv.max_quantity,
        updatedInv.reorder_level,
        updatedInv.reorder_required,
        selectedInventory._id
      )
      .then((response) => {
        const updatedInventories = invs.map((inv) =>
          inv._id === selectedInventory._id ? response.data.inventory : cat
        );
        setInvs(updatedInventories);
        console.log(updatedInventories);
        alert("Edited inventory successful");
        setSelectedInventory(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing inventory");
      });
  };

  const handleDeleteInventory = async (inventoryId) => {
    try {
      await inventoryServices.deleteInventory(inventoryId);
      alert("Deleted inventory successful");
      setInvs(invs.filter((i) => i._id !== inventoryId));
    } catch (error) {
      console.error("Error deleting inventory", error);
    }
  };

  return (
    <div>
      <div>
        {selectedInventory ? (
          <AddInventory
            onAddInventory={handleEditInventory}
            selected={selectedInventory}
          />
        ) : (
          <AddInventory
            onAddInventory={handleAddInventory}
            selected={selectedInventory}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Productname</th>
              <th scope="col">Drawer No</th>
              <th scope="col">Opening Stock</th>
              <th scope="col">In stock</th>
              <th scope="col">Out stock</th>
              <th scope="col">Out stock price</th>
              <th scope="col">Closing Stock</th>
              <th scope="col">Total stock Price</th>
              <th scope="col">Total Stock value</th>
              <th scope="col">Min Quantity</th>
              <th scope="col">Max Quantity</th>
              <th scope="col">Reorder Level</th>
              <th scope="col">Reorder required</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invs.length > 0 ? (
              invs.map((inventory, index) => (
                <tr key={inventory._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{inventory.productName}</td>
                  <td>{inventory.drawer_number}</td>
                  <td>{inventory.openingStock}</td>
                  <td>{inventory.inStock}</td>
                  <td>{inventory.outStock}</td>
                  <td>{inventory.outStockPrice}</td>
                  <td>{inventory.closingStock}</td>
                  <td>{inventory.totalStockBuyingPrice}</td>
                  <td>{inventory.totalStockSellingPrice}</td>
                  <td>{inventory.min_quantity}</td>
                  <td>{inventory.max_quantity}</td>
                  <td>{inventory.reorder_level}</td>
                  <td>{inventory.reorder_required}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedInventory(inventory)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteInventory(inventory._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No inventories found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventories;
