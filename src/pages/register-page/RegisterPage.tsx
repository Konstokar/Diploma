import InputField from "../../components/input-field";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import DatePicker from "../../components/date-picker";
import BlueButton from "../../components/buttons/blue-button";

export function RegisterPage() {
  return (
    <>
      <BaseLayout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Добро пожаловать!</h1>
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
        <br />
        <BlueButton text={"Зарегистрироваться"} onClick={() => {}}></BlueButton>
        <br />
        <p>Уже есть в системе? Войти</p>
      </BaseLayout>
    </>
  );
}
