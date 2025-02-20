import React from "react";

function AuthenticatedRoutes() {
  const userstate = "seeker";

  if (userstate === "seeker") {
    return <div>AuthenticatedRouteSeeker</div>;
  } else {
    return <div>AuthenticatedRouteProvider</div>;
  }
}

export default AuthenticatedRoutes;
