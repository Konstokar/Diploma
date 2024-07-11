import { GridColDef } from "@mui/x-data-grid";
import { Action } from "../types/Action";

export class ActionTable {
  static rows: Action[] = [
    {
      id: 1,
      name: "Action 1",
      grade: 1000,
      isDivids: false
    },
  ];
  
  static columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 90 },
    { field: "name", headerName: "name", width: 150 },
    { field: "grade", headerName: "grade", width: 150 },
    { field: "isDivids", headerName: "isDivids", width: 150 },
    { field: "dividSize", headerName: "dividSize", width: 150 },
    { field: "payments", headerName: "payments", width: 150 },
  ];
}