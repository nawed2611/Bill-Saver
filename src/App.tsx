import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Tips from "./Components/Tips";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/">
            <h1 className="logo">Bill Saver</h1>
          </Link>
          <a target="_blank" href="https://github.com/nawed2611/Bill-Saver">
            <h1 className="github">GitHub Repo</h1>
          </a>
          <Tips />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
