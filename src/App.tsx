import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Stpeters_components/Login";
import Photos from "./Stpeters_components/Photos";
import Home from "./Stpeters_components/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}