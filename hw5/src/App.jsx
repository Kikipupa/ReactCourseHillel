import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="content">
          {!isLoggedIn ? (
            <>
              <h1 className="title">
                The best pizza.<br></br>
                <span className="text-yellow">
                  Straight out of the oven, straight to you.
                </span>
              </h1>
              <p className="sub-title">
                👋 Welcome! Please start by telling us your name:
              </p>
              <LoginForm onLogin={handleLogin} />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
