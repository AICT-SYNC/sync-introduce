import { createRoot } from "react-dom/client";
import "./global.css";
import Router from "./router";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { SyncThemeProvider } from 'sync-design-system';

createRoot(document.getElementById("root")!).render(
  <SyncThemeProvider theme={window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}>
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
  </SyncThemeProvider>
);