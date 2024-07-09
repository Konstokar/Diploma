import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Bond } from "../types/Bond";


// Пример данных
const rows: Bond[] = [
  {
    id: 1,
    name: "Prod 1",
    link: "/",
    grade: 1500,
    coupon: 150,
    payments: "1 per quartal"
  },
];

// Определение столбцов
const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 90 },
  { field: "name", headerName: "name", width: 150 },
  { field: "grade", headerName: "grade", width: 150 },
  { field: "coupon", headerName: "coupon", width: 150 },
  { field: "payments", headerName: "payments", width: 150 },
];

// Функциональный компонент DataTable
const DataTable: React.FC = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataTable;
