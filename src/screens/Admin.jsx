
import { useDispatch } from "react-redux";
import { Footer } from "../components/footer/Footer";
import { Form } from "../components/form/Form";
import { Header } from "../components/head/Header";
import { ADD_SURNAME,  } from "../store/userOwner/actions";

export const Admin = () => {
  const dispattch = useDispatch();
  
  // console.log(value);

  // const addUserNameClick = () => {
  //   dispattch(addSurname);
  // }

  const addUserName = (text) => {
    dispattch({
      type: ADD_SURNAME,
      payload: text,
    });
  };
  
 
  return (
    <>
      <Header />
      <h1>Admin</h1>
       <Form onSubmit={addUserName} />
      <Footer />
    </>
  );
};
