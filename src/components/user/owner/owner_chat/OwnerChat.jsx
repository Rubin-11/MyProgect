import "./OwnerOrder.styles.css";

export const OwnerChat = () => {
  return (
    <div className="owner__chat">
      <h1>Чат</h1>
      <div className="chat__text">
        <p>Всем привет!!!</p> <p>Привет!!!</p>
        <p>Всем привет!!!</p> <p>Привет!!!</p>
        <p>Всем привет!!!</p> <p>Привет!!!</p>
      </div>
      <div className="container__input__text">
        <input className="input__text" type={"text"} />
        <button>Отправить</button>
      </div>
    </div>
  );
};
