import "./Profile.styles.css";

export const Profile = () => {
  return (
    <div className="owner__profile">
      <h1 className="owner__h1">Собственник</h1>
      <div className="owner__profile">
        <img width={"220px"} height={"200px"} src="#" alt="" />
        <h3>Мишарин Сергей Иванович</h3>
        <p>Кв №10</p>
      </div>
    </div>
  );
};
