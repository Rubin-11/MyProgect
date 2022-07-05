import { Button } from "../../../../elements/button/Button";
import "./CreateOrder.styles.css";

export const CreateOrder = () => {
  return (
    <>
      <h1>Создание заявки</h1>
      <form className="form__create__order" action="">
        <textarea className="create__order" name="" id=""></textarea>
        <div>
          <Button type="submit" text="Отправить" />
          <Button type="reset" text="Сбросить" />
        </div>
      </form>
    </>
  );
};
