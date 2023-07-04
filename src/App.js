import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import MyBins from "./components/MyBins";
import Recycling from "./components/Recycling";
import Scan from "./components/Scan";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loading" element={<Loading />} />
        <Route path="/MyBins" element={<MyBins />} />
        <Route path="/Recycling" element={<Recycling />} />
        <Route path="/Scan" element={<Scan />} />
      </Routes>
      <Footer />
    </Router>
    //fix header there
  );
}

export default App;
