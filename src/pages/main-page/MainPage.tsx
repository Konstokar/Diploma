import BlueButton from "../../components/buttons/blue-button";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import DataTable from "../../components/table/DataTable";
import {SelectionTable} from "../../utils/tableConfigs/SelectionTable"

export function MainPage() {
    return <>
    <BaseLayout>
    <br />
    <br />
    <h1>Все подборки</h1>
    <br /><br /><br /><br /><br />
    <DataTable rows={SelectionTable.rows} cols={SelectionTable.columns}>
    </DataTable>
    <br /><br /><br /><br /><br />
    <BlueButton text={"Новая подборка"} onClick={() => {}}></BlueButton>
    </BaseLayout>
    </>
}