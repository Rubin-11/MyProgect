import "./Button.styles.css";

export const Button = ({text, type}) => {
  return(
    <button className="element__button" type={type}>{text}</button>
  );
}