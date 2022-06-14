import React from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
        <AppRouter />
        <ToastContainer />
    </div>
  );
};

export default App;
