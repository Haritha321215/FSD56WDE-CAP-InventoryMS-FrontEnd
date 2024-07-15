import stockServices from "../../services/stockServices";
import { useLoaderData } from "react-router-dom";
import AddStock from "./AddStock";
import { useState } from "react";

export const loader = async () => {
  const stocks = await stockServices.getStocks();
  return { stocks };
};
function Stocks() {
  const { stocks } = useLoaderData();
  const [stks, setStks] = useState(stocks.data.stocks);
  const [selectedStock, setSelectedStock] = useState(0);
  // console.log(cats[0][0].stockName);
  const handleAddStock= async (newStk) => {
    stockServices
      .addStock(newStk.name, newStk.stockQuantity, newStk.maxQuantity)
      .then((response) => {
        setStks([...stks, response.data.stock]);
        alert("Added stock successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding stock");
      });
  };
  const handleEditStock = async (updatedCat) => {
    stockServices
      .updateStock(
        updatedCat.name,
        updatedCat.description,
        selectedStock._id
      )
      .then((response) => {
        const updatedStocks = stks.map((cat) =>
          cat._id === selectedStock._id ? response.data.stock : cat
        );
        setStks(updatedStocks);
        console.log(updatedStocks);
        alert("Edited stock successful");
        setSelectedStock(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing stock");
      });
  };

  const handleDeleteStock = async (stockId) => {
    try {
      await stockServices.deleteStock(stockId);
      alert("Deleted stock successful");
      setStks(stks.filter((s) => s._id !== stockId));
    } catch (error) {
      console.error("Error deleting stock", error);
    }
  };

  return (
    <div>
      <div>
        {selectedStock ? (
          <AddStock
            onAddStock={handleEditStock}
            selected={selectedStock}
          />
        ) : (
          <AddStock
            onAddStock={handleAddStock}
            selected={selectedStock}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Stock quantity</th>
              <th scope="col">Drawer number</th>
              <th scope="col">Min Quantity</th>
              <th scope="col">Max Quantity</th>
              <th scope="col">Buying Price</th>
              <th scope="col">Selling Price</th>
              <th scope="col">Total Buying Price</th>
              <th scope="col">Total Selling Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stks.length > 0 ? (
              stks.map((stock, index) => (
                <tr key={stock._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{stock.productName}</td> 
                  <td>{stock.stockQuantity}</td>
                  <td>{stock.drawer_number}</td>
                  <td>{stock.min_quantity}</td>
                  <td>{stock.max_quantity}</td>
                  <td>{stock.buying_price}</td>
                  <td>{stock.selling_price}</td>
                  <td>{stock.total_buying_price}</td>
                  <td>{stock.total_selling_price}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedStock(stock)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteStock(stock._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No stocks found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stocks;
