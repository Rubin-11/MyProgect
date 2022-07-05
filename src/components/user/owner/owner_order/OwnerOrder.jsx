import { NavLink, Outlet } from "react-router-dom";
import "./OwnerOrder.styles.css";

export const OwnerOrder = () => {
  return (
    <div className="owner__order">
     
      <menu>
        <ul className="order__menu">
          <li>
            <NavLink
              to={"/userowner/order/create_order"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Создать заявку
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/userowner/order/active_order"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Активные заявки
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/userowner/order/executed_order"}
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Выполненные заявки
            </NavLink>
          </li>
        </ul>
      </menu>
      <Outlet />
    </div>
  );
};
