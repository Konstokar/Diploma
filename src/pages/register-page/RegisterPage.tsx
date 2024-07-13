import InputField from "../../components/input-field";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import DatePicker from "../../components/date-picker";
import BlueButton from "../../components/buttons/blue-button";
import { useState } from "react";
import { Link } from "react-router-dom";

let emailVal: string = "";
let loginVal: string = "";
let passwordVal: string = "";
let confirmPasswordVal: string = "";
let phoneVal: string = "";
let birthDateVal: Date = new Date();

const today = new Date();

export function RegisterPage() {
  const [email, setEmail] = useState("Почта");
  const [login, setLogin] = useState("Логин");
  const [password, setPassword] = useState("Пароль");
  const [confirmPassword, setConfirmPassword] = useState("Повторите пароль");
  const [phone, setPhone] = useState("Номер телефона");
  const [birthDate, setBirthDate] = useState<Date>(today);

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    emailVal = e.target.value;
  };

  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    loginVal = e.target.value;
  };

  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    passwordVal = e.target.value;
  };

  const confirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    confirmPasswordVal = e.target.value;
  };

  const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    phoneVal = e.target.value;
  };

  const birthDateChange = (date: Date | null) => {
    if(date !== null){
      setBirthDate(date);
      birthDateVal = date;
    }
    else{
      setBirthDate(today);
      birthDateVal = today;
    }
  };

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
          value={login}
          onChange={loginChange}
        ></InputField>
        <InputField
          label={"Почта"}
          value={email}
          onChange={emailChange}
        ></InputField>
        <InputField
          label={"Пароль"}
          value={password}
          onChange={passwordChange}
        ></InputField>
        <InputField
          label={"Повторите пароль"}
          value={confirmPassword}
          onChange={confirmPasswordChange}
        ></InputField>
        <InputField
          label={"Номер телефона"}
          value={phone}
          onChange={phoneChange}
        ></InputField>
        <DatePicker
          label="Дата рождения"
          selectedDate={birthDate}
          onChange={birthDateChange}
        />
        <br />
        <BlueButton text={"Зарегистрироваться"} onClick={toMain}></BlueButton>
        <br />
        <p>Уже есть в системе? <Link to={"/"}>Войти</Link></p>
      </BaseLayout>
    </>
  );
}

const isAdult = (date: Date) => {
  const adultAge = 18;
  const adultDate = new Date(today.getFullYear() - adultAge, today.getMonth(), today.getDate());
  return date <= adultDate;
};

function toMain() {
  if(emailVal !== "" && passwordVal !== "" && phoneVal !== "" && loginVal !== "" && confirmPasswordVal !== "" && phoneVal !== "" && birthDateVal !== today){
    if(passwordVal !== confirmPasswordVal){
      alert("Пароли не совпадают")
    }
    else{
      window.location.href = '/'
    }
  }
  else if(birthDateVal === today || !isAdult(birthDateVal)){
    alert("Что-то не так с датой рождения")
  }
  else{
    alert("Пожалуйста, заполните все данные");
  }
}
