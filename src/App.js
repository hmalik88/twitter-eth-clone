import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import LandingRoutes from "./containers/LandingRoutes";
import ProtectedRoutes from "./containers/ProtectedRoutes";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);


  return (
    <>
      {isLoggedIn ? <ProtectedRoutes setLoggedIn /> : <LandingRoutes setLoggedIn />}
    </>
  );
}

export default withRouter(App);
