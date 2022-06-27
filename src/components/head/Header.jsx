import { NavLink } from "react-router-dom";

import  "./Header.styles.css";
import  "./Header.styles.1050.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header_menu">
          <li>
            <NavLink
            className={"HeaderNavLink"}
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
            className={"HeaderNavLink"}
              to="/userowner"
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Собственник
            </NavLink>
          </li>
          <li>
            <NavLink
            className={"HeaderNavLink"}
              to="/managementcompany"
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Управляющая компания
            </NavLink>
          </li>
          <li>
            <NavLink
            className={"HeaderNavLink"}
              to="/admin"
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Администратор
            </NavLink>
          </li>
          <li>
            <NavLink
            className={"HeaderNavLink"}
              to="/registration"
              style={({ isActive }) => ({
                color: isActive ? "#8DA653" : "#BFBFBF",
              })}
            >
              Вход
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
