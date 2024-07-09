import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FinanceProduct } from "../types/FinanceProduct";

// Пример данных
const rows: FinanceProduct[] = [
  {
    id: 1,
    name: "Prod 1",
    link: "/",
    bank: "Bank 1",
    procentGrade: 12,
    payments: "1 per month",
    procentType: "simple",
    removal: "yes",
    replanishment: "yes",
  },
];

// Определение столбцов
const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 90 },
  { field: "name", headerName: "name", width: 150 },
  { field: "bank", headerName: "bank", width: 150 },
  { field: "procentGrade", headerName: "procentGrade", width: 150 },
  { field: "payments", headerName: "payments", width: 150 },
  { field: "procentType", headerName: "procentType", width: 150 },
  { field: "removal", headerName: "removal", width: 150 },
  { field: "replanishment", headerName: "replanishment", width: 150 },
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
