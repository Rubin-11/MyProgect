// import { useParams } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/head/Header";
import { Owner} from "../components/user/owner/Owner";

export const UserOwner = () => {
  // const params = useParams();

  // console.log(params);
  return (
    <>
      <Header />
      <Owner />
      <Footer />
    </>
  );
};
