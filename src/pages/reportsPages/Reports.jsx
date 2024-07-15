import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import reportsServices from "../../services/reportsServices";

export const loader = async () => {
  const reports = await reportsServices.generateInventoryReport();
  return { reports };
};
function Reports() {
  const { reports } = useLoaderData();
  const [reps, setReps] = useState(reports.data);
  console.log(reps);
  return (
    <div>
      <h1>Reports</h1>
      <div>Total Stock:{reps.totalStockLevel[0].totalStock}</div>
      <div>Total Stock Cost:   {reps.totalStockPrice[0].totalrate}</div>
      <div>Total Stock Value:  {reps.totalStockValue[0].totalrate}</div>
      <div>Reorders Count:  {reps.reorderCount}</div>
      <div>Out of Stocks Count:   {reps.countOutOfStockItems}</div>
    </div>
  );
}

export default Reports;
