import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutAdmin from "./layouts/Admin";
import LayoutLanding from "./layouts/Landing";

import Wellcome from "./components/Wellcome";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ADMIN */}
        <Route Component={LayoutAdmin}>
          <Route path="/admin" Component={Wellcome} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>

        {/* LANDING */}
        <Route Component={LayoutLanding}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* AUTHENTICATION */}
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
