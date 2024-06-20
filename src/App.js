import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import Header from "./components/Header/Header";
import "./assets/styles/style.scss";

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/housing" element={<Housing></Housing>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
