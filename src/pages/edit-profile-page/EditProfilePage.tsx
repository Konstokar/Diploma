import BlueButton from "../../components/buttons/blue-button";
import RedButton from "../../components/buttons/red-button";
import DatePicker from "../../components/date-picker";
import InputField from "../../components/input-field";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";

export function EditProfilePage() {
    return <>
    <BaseLayout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Редактирование профиля</h1>
        <br />
        <InputField
          label={"Логин"}
          value={"Логин"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Почта"}
          value={"Почта"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Пароль"}
          value={"Пароль"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Повторите пароль"}
          value={"Повторите пароль"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Номер телефона"}
          value={"Номер телефона"}
          onChange={() => {}}
        ></InputField>
        <DatePicker
          label={"Дата рождения"}
          selectedDate={null}
          onChange={() => {}}
        ></DatePicker>
        <BlueButton text={"Сохранить изменения"} onClick={() => {}}></BlueButton>
        <br /><br /><br />
       <RedButton text={"Удалить аккаунт"} onClick={() => {}}></RedButton>
      </BaseLayout>
    </>
}