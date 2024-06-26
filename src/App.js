import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Housing from "./pages/Housing/Housing";
import Error from "./pages/Error/Error";
import "./assets/styles/style.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import housingData from '../src/data/logements.json';


function App() {
  const [housing, setHousing] = useState([]);
    useEffect(() => {
        setHousing(housingData)
    }, []);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home housing={housing}></Home>}></Route>
        <Route path="/about" element={<About housing={housing}></About>}></Route>
        <Route path="/housing/:id" element={<Housing></Housing>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
