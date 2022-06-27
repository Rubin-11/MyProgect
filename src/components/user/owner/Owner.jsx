import { Link, Outlet } from "react-router-dom";
import "./Owner.styles.css";

export const Owner = () => {
  return (
    <main className="owner__main">
      <Outlet />
      <menu className="owner__menu">
        <ul>
          <li>
            <Link to={"/userowner/order"}>Заявки</Link>
          </li>
          <li>
            <Link to={"/userowner/chat"}>Чат</Link>
          </li>
          <li>
            <Link to={"/userowner/owner"}>Моя страница</Link>
          </li>
        </ul>
      </menu>
    </main>
  );
};
