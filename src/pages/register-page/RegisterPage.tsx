import { ChangeEvent } from "react";
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
        <DatePicker
          label={""}
          selectedDate={null}
          onChange={() => {}}
        ></DatePicker>
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
        <BlueButton text={"Зарегистрироваться"} onClick={() => {}}></BlueButton>
        <p>Уже есть в системе? Войти</p>
      </BaseLayout>
    </>
  );
}
