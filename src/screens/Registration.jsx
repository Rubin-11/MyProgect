import { Footer } from "../components/footer/Footer";
import { Header } from "../components/head/Header";

export const Registraton = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Вход</h1>
        <form>
          <input type="text" placeholder="Введите логин" /> <br />
          <input type="password" placeholder="Введите пароль" />
          <br />
          <button type="submit">Вход</button>
          <button type="reset">Сбросить</button>
        </form>
      </main>
      <Footer/>
    </>
  );
};
