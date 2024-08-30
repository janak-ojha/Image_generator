import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import logo from "./assets/logo.svg"; // Correct import statement

function App() {
  return (
    <Router>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" /> {/* Ensure this line is active */}
          <p className="text-30">Replicate and Stability AI</p>
        </Link>
      </header>
    </Router>
  );
}

export default App;

