import Register from "./pages/Register";
import ThankYou from "./pages/ThankYou";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;
