import { Routes, Route } from "react-router-dom";
import Desktop from "./page/Desktop";
import Download from "./page/Download";
import Product from "./page/Product";
import WaitingList from "./page/Waitinglist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/download" element={<WaitingList />} />
      <Route path="/waitinglist" element={<WaitingList />} />
    </Routes>
  );
};

export default Router;
