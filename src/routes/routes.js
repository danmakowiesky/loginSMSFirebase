
import React from "react";

import {
  Route,
  Routes,
} from "react-router-dom";


const Services = lazy(() => import("./services"));

const Login = lazy(() => import("./user/login/loginFlow"));


export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
