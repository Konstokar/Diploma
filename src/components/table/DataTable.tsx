import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styles from "./DataTable.module.scss";


interface DataTableProps {
    rows: any[];
    cols: GridColDef[];
}


const DataTable: React.FC<DataTableProps> = ({rows, cols}) => {
    return (
      <div className={styles.table}>
        <DataGrid rows={rows} columns={cols}/>
      </div>
    );
  };
  
  export default DataTable;