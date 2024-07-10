import { GridColDef } from "@mui/x-data-grid";
import { Selection } from "../types/Selection";

export const rows: Selection[] = [
  {
    id: 1,
    name: "Select 1",
    risk: 0,
    date: "16.10.2024",
    deadline: "1 year",
  },
];

export const columns: GridColDef[] = [
  { field: "id", headerName: "id", width: 90 },
  { field: "risk", headerName: "risk", width: 150 },
  { field: "name", headerName: "name", width: 150 },
  { field: "date", headerName: "date", width: 150 },
  { field: "risk", headerName: "risk", width: 150 },
  { field: "deadline", headerName: "periodeadlined", width: 150 },
  { field: "target", headerName: "target", width: 150 },
];
