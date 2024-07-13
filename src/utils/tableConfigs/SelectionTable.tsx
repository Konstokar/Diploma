import { GridColDef } from "@mui/x-data-grid";
import { Selection } from "../types/Selection";

export class SelectionTable {
  static rows: Selection[] = [
    {
      id: 1,
      name: "Select 1",
      risk: 0,
      date: "16.10.2024",
      deadline: "1 year",
    },
  ];
  
  static columns: GridColDef[] = [
    { field: "risk", headerName: "риск", width: 150 },
    { field: "name", headerName: "название", width: 150 },
    { field: "date", headerName: "дата создания", width: 150 },
    { field: "deadline", headerName: "срок достижения", width: 150 },
    { field: "target", headerName: "финансовая цель", width: 150 },
  ];
}
