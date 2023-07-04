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
      <Routes>
        <Route path="/Loading" element={<Loading />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/MyBins"
          element={
            <>
              <Header />
              <MyBins />
              <Footer />
            </>
          }
        />
        <Route
          path="/Recycling"
          element={
            <>
              <Header />
              <Recycling />
              <Footer />
            </>
          }
        />
        <Route
          path="/Scan"
          element={
            <>
              <Header />
              <Scan />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
