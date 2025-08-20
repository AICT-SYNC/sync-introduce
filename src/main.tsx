import { createRoot } from "react-dom/client";
import "./global.css";
import Router from "./router";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={"/"}>
    <Router />
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"

    />
  </BrowserRouter>
);