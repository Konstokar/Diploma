import { GridColDef } from "@mui/x-data-grid";
import { Bond } from "../types/Bond";

export class BondTable {
  static rows: Bond[] = [
    {
      id: 1,
      name: "Prod 1",
      link: "/",
      grade: 1500,
      coupon: 150,
      payments: "1 per quartal"
    },
  ];

  static columns: GridColDef[] = [
    { field: "name", headerName: "name", width: 150 },
    { field: "grade", headerName: "grade", width: 150 },
    { field: "coupon", headerName: "coupon", width: 150 },
    { field: "payments", headerName: "payments", width: 150 },
  ];
}

