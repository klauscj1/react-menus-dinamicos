import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./page/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
