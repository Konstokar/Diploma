import { useState } from "react";
import BlueButton from "../../components/buttons/blue-button/BlueButton";
import InputField from "../../components/input-field/InputField";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import { Link } from "react-router-dom";

let emailVal: string = "";
let passwordVal: string = "";
let phoneVal: string = "";

export function AuthPage() {
    const [email, setEmail] = useState('Почта');
    const [password, setPassword] = useState('Пароль');
    const [phone, setPhone] = useState('Номер телефона');

    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        emailVal = e.target.value;
    };

    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      passwordVal = e.target.value;
    };

    const phoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
      phoneVal = e.target.value;
    };

    return <>
    <>
      <BaseLayout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Рады видеть вас снова!</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
          label={"Номер телефона"}
          value={phone}
          onChange={phoneChange}
        ></InputField>
        <br />
        <BlueButton text={"Войти"} onClick={toMain}></BlueButton>
        <br />
        <p>Вас нет в системе? <Link to="/register">Зарегистрироваться</Link>
        </p>
      </BaseLayout>
    </>
    </>
}

function toMain() {
  if(emailVal !== "" && passwordVal !== "" && phoneVal !== ""){
    window.location.href = '/'
  }
  else{
    alert("Пожалуйста, заполните все данные");
  }
}