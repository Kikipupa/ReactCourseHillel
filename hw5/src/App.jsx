import { useState } from "react";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
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
          <Menu />
        )}
      </main>
    </div>
  );
}

export default App;
