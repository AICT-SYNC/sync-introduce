import { Routes, Route } from "react-router-dom";
import Desktop from "./page/Desktop";
import Download from "./page/Download";
import Product from "./page/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
};

export default Router;
