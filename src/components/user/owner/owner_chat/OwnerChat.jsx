import "./OwnerOrder.styles.css";

export const OwnerChat = () => {
  return (
    <div className="owner__chat">
      <h1>Чат</h1>
      <div className="owner__chat__text">
        <p>Всем привет!!!</p> <p>Привет!!!</p>
        <p>Всем привет!!!</p> <p>Привет!!!</p>
        <p>Всем привет!!!</p> <p>Привет!!!</p>
      </div>
      <input type={"text"} /><button>Отправить</button>
    </div>
  );
};
