import React from "react";
import "./style.css";
import Home from './component/Home';
import Aboutus from './component/Aboutus';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes,Route } from
'react-router-dom'

export default function App() {
  return (
    <div>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<Aboutus />} />
    </Routes>
  </Router>
     
    </div>
  );
}
