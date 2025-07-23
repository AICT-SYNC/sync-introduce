import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop from "./page/Desktop";
import Download from "./page/Download";
import Product from "./page/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
