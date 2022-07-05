import { Route, Routes } from "react-router-dom";
import { OwnerChat } from "../components/user/owner/owner_chat/OwnerChat";
import { OwnerOrder } from "../components/user/owner/owner_order/OwnerOrder";
import { Profile } from "../components/user/owner/owner_profile/Profile";
import {
  UserOwner,
  ManagementCompany,
  Admin,
  Main,
  Registraton,
  Entrance,
} from "../screens";
import { OwnerPage } from "../components/user/owner/owner_page/OwnerPage";
import { CreateOrder } from "../components/user/owner/owner_order/create_order/CreateOrder";
import { ExecutedOrder } from "../components/user/owner/owner_order/executed_order/ExecutedOrder";
import { ActiveOrder } from "../components/user/owner/owner_order/active_order/ActiveOrder";

export const RouterHead = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="userowner" element={<UserOwner />}>
        <Route index element={<OwnerPage />} />
        <Route path="order" element={<OwnerOrder />}>
          <Route path="create_order" element={<CreateOrder />} />
          <Route path="active_order" element={<ActiveOrder />} />
          <Route path="executed_order" element={<ExecutedOrder />} />
        </Route>
        <Route path="chat" element={<OwnerChat />} />
        <Route path="owner" element={<Profile />} />
      </Route>

      <Route path="/managementcompany" element={<ManagementCompany />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/entrance" element={<Entrance />} />
      <Route path="/registration" element={<Registraton />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
