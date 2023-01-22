import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage/HomePage";
import Detail from "./components/Detail/Detail";

// Style Imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
