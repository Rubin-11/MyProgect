import { NavLink, Outlet } from "react-router-dom";
import "./OwnerOrder.styles.css";

export const OwnerOrder = () => {
  return (
    <div className="owner__order">
      <menu>
        <ul className="order__menu">
          <li>
            <NavLink to={"/order"}> Создать заявку</NavLink>
          </li>
          <li>
          <NavLink to={"/order"}>Заявки в работе</NavLink>
          </li>
          <li>
          <NavLink to={"/order"}>Выполненные заявки</NavLink>
          </li>
        </ul>
      </menu>
      <div className={"create_order"}>
        <form>

        </form>
      </div>
    </div>
  );
};
