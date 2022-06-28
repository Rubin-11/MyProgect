import { NavLink, Outlet } from "react-router-dom";
import "./Owner.styles.css";

export const Owner = () => {
  return (
    <main className="owner__main">
      <Outlet />
      <menu className="owner__menu">
        <ul>
          <li>
            <NavLink
              to={"/userowner/order"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Заявки
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/userowner/chat"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Чат
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/userowner/owner"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Моя страница
            </NavLink>
          </li>
        </ul>
      </menu>
    </main>
  );
};
