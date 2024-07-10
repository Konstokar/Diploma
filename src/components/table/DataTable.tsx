import { DataGrid, GridColDef } from "@mui/x-data-grid";


interface DataTableProps {
    rows: any[];
    cols: GridColDef[];
}


const DataTable: React.FC<DataTableProps> = ({rows, cols}) => {
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={cols} />
      </div>
    );
  };
  
  export default DataTable;