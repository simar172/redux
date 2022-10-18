import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:idx" element={<ProductDetail />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
