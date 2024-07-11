import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import DataTable from "../../components/table/DataTable";
import { ActionTable } from "../../utils/tableConfigs/ActionTable";
import { BankTable } from "../../utils/tableConfigs/BankTable";
import { BondTable } from "../../utils/tableConfigs/BondTable";
import styles from "./TitlePages.module.scss"

export function SelectPage() {
    return <>
    <BaseLayout>
    <span className={styles.title}>
        <h1>Подборка</h1>
    </span>
    <h4>Дата создания - 16.10.2024</h4>
    <span>
        <h1>Ценные бумаги на бирже</h1>
        <h2>Акции</h2>
        <DataTable rows={ActionTable.rows} cols={ActionTable.columns}></DataTable>
        <h2>Облигации</h2>
        <DataTable rows={BondTable.rows} cols={BondTable.columns}></DataTable>
        <h1>Финансовые продукты банков</h1>
        <DataTable rows={BankTable.rows} cols={BankTable.columns}></DataTable>
    </span>
    </BaseLayout>
    </>
}