import DropList from "../../components/drop-list";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import InputField from "../../components/input-field";
import DataTable from "../../components/table/DataTable";
import { ActionTable } from "../../utils/tableConfigs/ActionTable";
import { BondTable } from "../../utils/tableConfigs/BondTable";
import { BankTable } from "../../utils/tableConfigs/BankTable";
import GreyButton from "../../components/buttons/grey-button";
import BlueButton from "../../components/buttons/blue-button";
import styles from "./NewSelect.module.scss"

export function NewSelectPage() {
    return <>
    <BaseLayout>
    <h1>Подтверждение новой подборки</h1>
    <br />
    <InputField label={""} value={"Имя подборки"} onChange={() => {}}></InputField>
    <br />
    <DropList label={"Финансовая цель"} options={[]} selectedValue={""} onChange={() => {}}></DropList>
    <span>
        <h1>Ценные бумаги на бирже</h1>
        <h2>Акции</h2>
        <DataTable rows={ActionTable.rows} cols={ActionTable.columns}></DataTable>
        <h2>Облигации</h2>
        <DataTable rows={BondTable.rows} cols={BondTable.columns}></DataTable>
        <h1>Финансовые продукты банков</h1>
        <DataTable rows={BankTable.rows} cols={BankTable.columns}></DataTable>
    </span>
    <br /><br /><br /><br /><br />
    <div className={styles.buttons}>
        <GreyButton text={"Начать заново"} onClick={toQuestionAgain}></GreyButton>
        <div></div>
        <div></div>
        <BlueButton text={"Завершить"} onClick={toMain}></BlueButton>
    </div>
    </BaseLayout>
    </>
}

function toQuestionAgain(){
    window.location.href = '/question';
}

function toMain(){
    window.location.href = '/';
}