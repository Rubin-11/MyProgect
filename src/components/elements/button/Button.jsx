import "./Button.styles.css";

export const Button = ({text, type, func}) => {
  return(
    <button onClick={func} className="element__button" type={type}>{text}</button>
  );
}