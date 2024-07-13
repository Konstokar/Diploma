import BlueButton from "../../components/buttons/blue-button/BlueButton";
import InputField from "../../components/input-field/InputField";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";

export function AuthPage() {
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
          value={"Почта"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Пароль"}
          value={"Пароль"}
          onChange={() => {}}
        ></InputField>
        <InputField
          label={"Номер телефона"}
          value={"Номер телефона"}
          onChange={() => {}}
        ></InputField>
        <br />
        <BlueButton text={"Войти"} onClick={toMain}></BlueButton>
        <br />
        <p>Вас нет в системе? Зарегистрироваться</p>
      </BaseLayout>
    </>
    </>
}

function toMain() {
  window.location.href = '/'
}