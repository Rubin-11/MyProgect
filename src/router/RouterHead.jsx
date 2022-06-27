import { Route, Routes } from "react-router-dom";
import { OwnerChat } from "../components/user/owner/owner_chat/OwnerChat";
import { OwnerOrder } from "../components/user/owner/owner_order/OwnerOrder";
import { OwnerScreen } from "../components/user/owner/owner_screen/OwnerScreen";
import {
  UserOwner,
  ManagementCompany,
  Admin,
  Main,
  Registraton,
  Entrance,
} from "../screens";

export const RouterHead = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/userowner" element={<UserOwner />}>
        <Route index element={<OwnerScreen />} />
        <Route path="order" element={<OwnerOrder />} />
        <Route path="chat" element={<OwnerChat />} /> 
        <Route path="owner" element={<OwnerScreen />} />
      </Route>

      <Route path="/managementcompany" element={<ManagementCompany />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/entrance" element={<Entrance />} />
      <Route path="/registration" element={<Registraton />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
