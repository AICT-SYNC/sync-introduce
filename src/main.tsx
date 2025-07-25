import { createRoot } from "react-dom/client";
import "./global.css";
import Router from "./router";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/sync-introduce/">
    <Router />
  </BrowserRouter>
);