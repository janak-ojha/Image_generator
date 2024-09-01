import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import logo from "./assets/logo.svg"; // Correct import statement
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";


function App() {
  return (
    <Router>
      <header  className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="flex justify-center items-center gap-5">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" /> {/* Ensure this line is active */}
          <p className="text-30">Replicate and Stability AI</p>
        </Link>
        <Link   
        to ="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
        create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;

