import { Button } from "../../elements/button/Button";
import { Input } from "../../elements/input/Input";
import "./FormRegistraton.styles.css";

export const FormRegistraton = () => {
  return (
    <main>
      <h2>Вход</h2>
      <form>
        <Input type={"text"} placeholder={"Введите логин"} />
        <br />
        <Input type={"password"} placeholder={"Введи пароль"} />
        <br />
        <div>
          <Button type={"submit"} text={"Вход"} />
          <Button type={"reset"} text={"Сбросить"} />
        </div>
      </form>
    </main>
  );
};
