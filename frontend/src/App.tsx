import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/About";
// import ContactPage from "./pages/Contact";
import BrowsePaper from "./pages/BrowsePaper";
import SubmitPaper from "./pages/SubmitPaper";
import Contact from "./pages/ContactPage";
import ResearchPaperPage from "./pages/ResearchPaperPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/browse" element={<BrowsePaper />} />
        <Route path="/submit" element={<SubmitPaper />} />
        <Route path="/paper" element={<ResearchPaperPage />} />
      </Routes>
    </>
  );
}

export default App;
