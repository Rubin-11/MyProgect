// import { NavLink } from "react-router-dom";
import { Button } from "../../elements/button/Button";
import { Input } from "../../elements/input/Input";
import "./FormEntrance.styles.css";

export const FormEntrance = () => {
  
  return(
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
          {/* <NavLink to="/registration" >Зарегистрироваться </NavLink> */}
        </div>
      </form>
    </main>
  );
}