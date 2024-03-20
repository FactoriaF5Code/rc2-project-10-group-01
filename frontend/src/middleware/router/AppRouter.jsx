import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../presentation/pages/Home";
import { Activities } from "../../presentation/pages/Activities";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
};
