import AppRouterAuthCheck from "../../routes/AppRouterAuthCheck";
import { RouteMaker } from "../../../components/routes/routes";
import AdminPanel from "../AdminPanel";
import AdminSignIn from "../adminSignIn/AdminSignIn";

function AdminPanelRoutes() {
  return (
    <AppRouterAuthCheck
      noAuth={
        <RouteMaker
          routes={{
            "*": <AdminSignIn />,
          }}
        />
      }
      authenticated={
        <RouteMaker
          routes={{
            "*": <AdminPanel />,
          }}
        />
      }
    />
  );
}

export default AdminPanelRoutes;
