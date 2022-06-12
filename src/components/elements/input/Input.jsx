import "./Input.styles.css";

export const Input = ({type, text, placeholder}) => {
  return(
    <input className="element__input" type={type} placeholder={placeholder}/>
  );
}