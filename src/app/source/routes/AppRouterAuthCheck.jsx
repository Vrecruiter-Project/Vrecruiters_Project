import { useAuthChangeStatusCheck } from "../../components/fireBase/fireBaseAuth/AuthStateChangeCheck";
import Loading from "../../components/Loading/Loading";


function AppRouterAuthCheck({ noAuth, authenticated }) {
  const userstatus = useAuthChangeStatusCheck();
  console.log(userstatus);

  if (userstatus.loading) return <><Loading/></>;
  if (userstatus.user == null) return <>{noAuth}</>;
  return <>{authenticated}</>;
}

export default AppRouterAuthCheck;
