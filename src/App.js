import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
